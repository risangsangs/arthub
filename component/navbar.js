import React, { useState } from 'react';
import { useNavigation, useIsFocused, useRoute } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import Homei from '../assets/home.png';
import Ticket from '../assets/ticket.png';
import Bookmark from '../assets/bookmark.png';
import Setting from '../assets/setting.png';
import Add from '../assets/add.png';

const Nav = () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const route = useRoute(); // Menggunakan useRoute untuk mendapatkan informasi rute saat ini
    const [activeMenu, setActiveMenu] = useState('Home');

    const GoHome = () => {
        navigation.navigate('home');
        setActiveMenu('home');
    };

    const GoSetting = () => {
        navigation.navigate('setting');
        setActiveMenu('seetting');
    };

    const GoTicket = () => {
        navigation.navigate('ticketupcoming');
        setActiveMenu('ticketupcoming');
    };
    const GoBookmark = () => {
        navigation.navigate('bookmark');
        setActiveMenu('bookmark');
    };
    const GoAdd = () => {
        navigation.navigate('bookmark');
        setActiveMenu('bookmark');
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
                <TouchableOpacity onPress={GoHome} style={styles.navItem}>
                    <Image style={[styles.icon, activeMenu === 'home' && styles.activeIcon]} source={Homei} />
                    <Text style={[styles.label, activeMenu === 'home' && styles.activeLabel]}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={GoTicket} style={styles.navItem}>
                    <Image style={[styles.icon, activeMenu === 'ticketupcoming' && styles.activeIcon]} source={Ticket} />
                    <Text style={[styles.label, activeMenu === 'ticketupcoming' && styles.activeLabel]}>Ticket</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={GoBookmark} style={styles.navItem}>
                    <Image style={[styles.icon, activeMenu === 'bookmark' && styles.activeIcon]} source={Bookmark} />
                    <Text style={[styles.label, activeMenu === 'bookmark' && styles.activeLabel]}>Bookmark</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={GoSetting} style={styles.navItem}>
                    <Image style={[styles.icon, activeMenu === 'setting' && styles.activeIcon]} source={Setting} />
                    <Text style={[styles.label, activeMenu === 'setting' && styles.activeLabel]}>Setting</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'relative',
    },
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        width: 362,
        height: 70,
        borderRadius: 10,
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
    icon: {
        width: 24,
        height: 24,
    },
    icon2: {
        width: 44,
        height: 44,
        bottom: 15,
    },
    label2:{ 
        bottom: 10,
        fontSize: 10,
        color: '#92959B',
    },
    activeIcon: {
        tintColor: '#7545F6',
    },
    label: {
        fontSize: 10,
        color: '#92959B',
    },
    activeLabel: {
        color: '#7545F6',
    },
});

export default Nav;