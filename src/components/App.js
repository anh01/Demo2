import React from 'react';
import { View, Text, Platform } from 'react-native';
import Note from './Note';
//B1: import Note
//B2: Dung com Note 

const arr = ['Hello', 'Hi', 'How are you?'];
const bool = NaN;

// function getChild(dk) {
//     if (dk) {
//         return <Note title="Ket thuc" />;
//     } else {
//         return <Note title="Chua ket thuc" />;
//     }
// }

const App = () => (
    <View>
        {arr.map((e, i) => <Note key={i}>{e}</Note>)}
    </View>
);

export default App;
