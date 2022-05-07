import reactDom from 'react-dom';
import { StyleSheet, Dimensions } from 'react-native';

export const gStyle = StyleSheet.create({

    main: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0, 0.60)'
    },
    title: {
        fontSize: 16, 
        color: '#333',
        //fontFamily: 'PT-regular',
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black',
        margin: 10,
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
        backgroundColor: '#FF6FB5',
    },
    modalText: {
        marginBottom: 10,
        textAlign: "center",
        fontSize: 16, 
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
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: 'white',
        width: Dimensions.get('screen').width - 40,
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
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'PT-regular',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        //fontFamily: 'PT-regular',
    },
    loading: {
        marginTop: '50%',
    },
    checkbox: {
        alignSelf: "center",
    },
    input: {
        height: 100,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        textAlignVertical: "top",
    },

}) 