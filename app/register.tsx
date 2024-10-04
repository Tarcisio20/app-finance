import { Button } from "@/components/project/button";
import { Input } from "@/components/project/input";
import { Logo } from "@/components/project/logo";
import { Page } from "@/components/project/page";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";

export default function Screen(){

    const router = useRouter()

    const  [name, setName] = useState('')
    const  [email, setEmail] = useState('')
    const  [password, setPassword] = useState('')

    const handleName = () => {}
    const handleEmail = () => {}
    const handlePassword = () => {}

    return <Page type={true} >
        <View className='flex-1 bg-themeDark items-center justify-center'>
            <Logo size='meddium' />
            <View className='mt-8 w-[280px] p-2 gap-2'>
                <Input label='Nome' onChangeText={handleName} value={name} placeholder='Digite o seu nome'  />
                <Input label='E-mail' onChangeText={handleEmail} value={email} placeholder='Digite o seu e-mail'  />
                <Input label='Senha' onChangeText={handlePassword} value={password} placeholder='Digite a sua senha' password  />
                <View className='mt-20'>
                    <Button label='Cadastrar' onPress={()=>{}} size='large' />
                    <View className='mt-4 flex-row gap-1 justify-end'>
                        <Text className='text-white text-lg'>Já tem conta?</Text>
                        <Text className='text-primary text-lg cursor-pointer' onPress={()=>router.replace('/')}>Faça Login</Text>
                    </View>
                </View>
            </View>
        </View>
    </Page>
}