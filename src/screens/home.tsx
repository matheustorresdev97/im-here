import {
    Alert,
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native'

import { Participant } from '@/components/participants'
import { useState } from 'react'

export default function Home() {
    const [participants, setParticipants] = useState<string[]>([])
    const [participantName, setParticipantName] = useState('')

    function handleAddParticipant() {
        if (participants.includes(participantName)) {
            return Alert.alert(
                'Participante existente',
                'Ja existe um participante com esse nome'
            )
        }

        setParticipants(prevState => [...prevState, participantName])
        setParticipantName('')
    }

    function handleRemoveParticipant(name: string) {
        Alert.alert('Remover', `Remover o participante ${name}?`, [
            {
                text: 'Sim',
                onPress: () => Alert.alert('Deletado!'),
            },
            {
                text: 'Não',
                style: 'cancel',
            },
        ])
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Nome do Evento</Text>
            <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2024</Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6b6b6b"
                    value={participantName}
                    onChangeText={setParticipantName}
                />
                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.7}
                    onPress={handleAddParticipant}
                >
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant
                        name={item}
                        onRemove={() => handleRemoveParticipant(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguém chegou no evento ainda? Adicione participantes a sua lista
                        de presença.
                    </Text>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131016',
        padding: 24,
    },
    eventName: {
        color: '#fafafa',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48,
    },
    eventDate: {
        color: '#6b6b6b',
        fontSize: 16,
    },
    input: {
        height: 56,
        flex: 1,
        backgroundColor: '#1f1e25',
        borderRadius: 4,
        color: '#fafafa',
        padding: 16,
        fontSize: 16,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 56,
        width: 56,
        borderRadius: 4,
        backgroundColor: '#31cf67',
    },
    buttonText: {
        color: '#fafafa',
        fontSize: 24,
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginTop: 36,
        marginBottom: 42,
    },
    listEmptyText: {
        color: '#fafafa',
        fontSize: 14,
        textAlign: 'center',
    },
})