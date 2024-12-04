import { Participant } from '@/components/participants'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function Home() {

    function handleAddParticipant() {
        console.log('Adicionar participante')
    }

    function handleRemoveParticipant(name: string) {
        console.log(`Deletar participante: ${name}`)
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
                />
                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.7}
                    onPress={handleAddParticipant}
                >
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Participant
                    name="Matheus"
                    onRemove={() => handleRemoveParticipant('Matheus')}
                />
                <Participant
                    name="Matheuszinho"
                    onRemove={() => handleRemoveParticipant('Matheuszinho')}
                />
                <Participant
                    name="Matheusao"
                    onRemove={() => handleRemoveParticipant('Matheusao')}
                />
            </View>
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
})