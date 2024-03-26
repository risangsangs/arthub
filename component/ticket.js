import React, { useState } from 'react';
import { useNavigation, useIsFocused, useRoute } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, TextDecorationLine } from 'react-native'; // Menambahkan TextDecorationLine untuk mengatur garis bawah

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
                    <Text style={[styles.label, activeMenu === 'ticketupcoming' && styles.activeLabel]}>Active</Text>
                    {activeMenu === 'ticketupcoming' && <View style={{ borderBottomColor: 'black', borderBottomWidth: 2, width: 171 }} />}
                </TouchableOpacity>
                <TouchableOpacity onPress={Goticketonsale} style={styles.navItem}>
                    <Text style={[styles.label, activeMenu === 'ticketonsale' && styles.activeLabel]}>Past</Text>
                    {activeMenu === 'ticketonsale' && <View style={{ borderBottomColor: 'black', borderBottomWidth: 2, width: 171 }} />}
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

        alignItems: 'center',
    },
    navItem: {
        alignItems: 'center',
    },
    label: {
        fontSize: 14, // Mengubah ukuran font menjadi 14
        color: 'black',
        textAlign: 'center',
    },
    activeLabel: {
        color: 'black',
        textAlign: 'center', 
        textAlignVertical: 'center',
    },
});

export default Tic;
