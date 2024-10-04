import Icon from '@expo/vector-icons/FontAwesome6'
import { Page } from '@/components/project/page';
import { StatusBar, Text, View } from 'react-native';
import { Logo } from '@/components/project/logo';
import { Input } from '@/components/project/input';
import { useState } from 'react';
import { Button } from '@/components/project/button';
import { Link, useRouter } from 'expo-router';

export default function Screen(){

  const router = useRouter()

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const handlePassword = (text : string) => {
    setPassword(text)
  }
  const handleUser = (text : string) => {
    setUser(text)
  }

  
  return <Page type={true}>
    <View className='flex-1 bg-themeDark items-center justify-center'>
    
          <Logo size='meddium' />
          <View className='mt-8 w-[280px] p-2'>
            <Input label='Usuário' onChangeText={handleUser} value={user} placeholder='Digite o usuário'  />
            <Input label='Senha' onChangeText={handlePassword} value={password} placeholder='Digite a senha' password  />
           <View className='mt-20'>
              <Button label='Entrar' onPress={()=>router.replace('/(tabs)')} size='large' />
              <View className='mt-4 flex-row gap-1 justify-end'>
                <Text className='text-white text-lg'>Não tem conta?</Text>
                  <Text className='text-primary text-lg cursor-pointer' onPress={()=>router.replace('/register')}>Cadastrar</Text>
              </View>
           </View>
          </View>
    </View>
  </Page>
}