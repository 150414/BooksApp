import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Modal,
    ActivityIndicator,
    SafeAreaView,
} from 'react-native';


const Loader = props => {
    const {
        loading,
      
    } = props;

    return (
        <Modal
            transparent={true}
            animationType={'none'}
            visible={loading}
            onRequestClose={() => { console.log('close modal') }}>
            <SafeAreaView style={styles.wrapper}>
                <View style={styles.imageView}>
                  <ActivityIndicator
                        animating={loading} color="black" size={32} />
                </View>
            </SafeAreaView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalBackground: {
        width:'100%',
        height:'100%',
        alignItems: 'center',
        opacity:0.6,
        flexDirection: 'column',
        
    },
    activityIndicatorWrapper: {
        height:'100%',
        width: '100%',
        borderRadius: 10,
        display: 'flex',
        opacity:0.5,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    container: {
        flex: 1,
      },
      wrapper: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
      },
      imageView: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
      },
      image: {
        width: 100,
        height: 100,
      },
});

export default Loader;