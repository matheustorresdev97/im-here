import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type ParticipantProps = {
    name: string
    onRemove: () => void
}

export function Participant({ name, onRemove }: ParticipantProps) {


    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.7}
                onPress={onRemove}
            >
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#1f1e25',
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    name: {
        flex: 1,
        paddingLeft: 16,
        fontSize: 16,
        color: '#fafafa',
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 4,
        backgroundColor: '#e23c44',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fafafa',
        fontSize: 24,
    },
})