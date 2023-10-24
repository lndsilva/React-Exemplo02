import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";


const WelcomeScreen = () => (
    <View>
        <Header title="Bem vindo ao React Native" style={heading.cabecalho}/>
        <Text style={heading.cabecalho}>Passo um</Text>
        <Text>
            Editar o arquivo App.tsx para modificações no seu aplicativo.
        </Text>
        <Text>
            Pressione CTRL+R para reiniciar o emulador
        </Text>
        <Text style={heading.cabecalho}>Debugando!!!</Text>
        <Text>
            Lendo os documentos gravados nesta sessão.
        </Text>
    </View>
)
export default WelcomeScreen

const heading = StyleSheet.create({
    cabecalho:{
        color: "#FFF",
        alignContent: "center",
        backgroundColor: "#000"
    }
})