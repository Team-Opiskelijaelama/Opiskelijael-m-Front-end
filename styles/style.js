import reactDom from 'react-dom';
import { StyleSheet, Dimensions } from 'react-native';

export const gStyle = StyleSheet.create({

    main: {
        flex: 1,
        padding: 20,
        paddingTop: 20,        
        //backgroundColor: ''
    },
    title: {
        fontSize: 20, 
        color: '#333',
        fontFamily: 'PT-regular',
        textAlign: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        elevation: 5
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        flex: 1,
        width: "100%",
        height: "100%"
    },
    description: {
        marginTop: 20,
        paddingHorizontal: 10,
        marginHorizontal: 20,
        backgroundColor: 'white',
        width: Dimensions.get('screen').width - 40,
        height: 150,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    descriptionHuge: {
        marginTop: 20,
        paddingHorizontal: 10,
        marginHorizontal: 20,
        backgroundColor: 'white',
        width: Dimensions.get('screen').width - 40,
        height: 360,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    descriptionText: {
        color: 'black',
        fontSize: 16,
    }, 
    button: {
        backgroundColor: '#FF6FB5',
        width: Dimensions.get('screen').width - 40,
        height: 40,
        borderRadius: 15,
        marginTop: 20,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'PT-regular',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        fontFamily: 'PT-regular',
 },

}) 