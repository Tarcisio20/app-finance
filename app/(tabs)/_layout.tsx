import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
    return <Tabs screenOptions={{ headerShown : false }} >
        <Tabs.Screen
            name="index"
            options={{
                title : 'Home',
                tabBarIcon : ({ color }) => <FontAwesome6 name="house" size={28} color={color} />,
    
            }}
        />
        <Tabs.Screen
            name="received"
            options={{
                title : 'Receitas',
                tabBarIcon : ({ color }) => <FontAwesome6 name="house" size={28} color={color} />,

            }}
        />

        <Tabs.Screen
            name="payments"
            options={{
                title : 'Despesas',
                tabBarIcon : ({ color }) => <FontAwesome6 name="house" size={28} color={color} />,

            }}
        />

        <Tabs.Screen
            name="config"
            options={{
                title : 'Configurações',
                tabBarIcon : ({ color }) => <FontAwesome6 name="house" size={28} color={color} />,

            }}
        />

        <Tabs.Screen
            name="profile"
            options={{
                title : 'Perfil',
                tabBarIcon : ({ color }) => <FontAwesome6 name="house" size={28} color={color} />,

            }}
        />
    </Tabs>
}