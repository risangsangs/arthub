import React, { useState } from 'react';
import { useNavigation, useIsFocused, useRoute } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Tic = () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const route = useRoute(); // Menggunakan useRoute untuk mendapatkan informasi rute saat ini
    const [activeMenu, setActiveMenu] = useState('ticketupcoming');

    const GOticketupcoming = () => {
        navigation.navigate('ticketupcoming');
        setActiveMenu('ticketupcoming');
    };

    const Goticketonsale= () => {
        navigation.navigate('ticketonsale');
        setActiveMenu('ticketonsale');
    };

    const Goticketpast= () => {
        navigation.navigate('ticketpast');
        setActiveMenu('ticketpast');
    };

    // Mengatur menu aktif berdasarkan halaman yang difokuskan
    React.useEffect(() => {
        if (isFocused) {
            // Mendapatkan nama halaman yang sedang difokuskan dari informasi rute saat ini
            const focusedRoute = route.name;
            setActiveMenu(focusedRoute);
        }
    }, [isFocused, route]);

    return (
        <View style={styles.container}>
            <View style={styles.nav}>
                <TouchableOpacity onPress={GOticketupcoming} style={styles.navItem}>
                    <Text style={[styles.label, activeMenu === 'ticketupcoming' && styles.activeLabel]}>Upcoming</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={Goticketonsale} style={styles.navItem}>
                    <Text style={[styles.label, activeMenu === 'ticketonsale' && styles.activeLabel]}>Past</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={Goticketpast} style={styles.navItem}>
                    <Text style={[styles.label, activeMenu === 'ticketpast' && styles.activeLabel]}>On Sale</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        left: 30,
    },
    nav: {
        marginTop:20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#EAECF0',
        width: 331,
        height: 34,
        borderRadius: 15,
        elevation: 8,
        bottom: 10,
        // Tambahkan properti shadow di bawah
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    navItem: {
        alignItems: 'center',
    },
    label: {
        fontSize: 10,
        color: 'black',
        textAlign: 'center',
    },
    activeLabel: {
        color: 'white',
        backgroundColor: '#786AD0',
        width: 100,
        height: 30,
        borderRadius: 10,
        textAlign: 'center', 
        textAlignVertical: 'center',
    },
});

export default Tic;