import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function WorkoutCard({
  image,
  title,
  duration,
  calories,
  level,
  onPress,
}) {
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image source={image} style={styles.cardImage} />

      <View style={styles.badgeRow}>
        <Text style={styles.levelBadge}>{level}</Text>
      </View>

      <Pressable
        style={styles.favoriteButton}
        onPress={() => setIsFavourite((current) => !current)}
      >
        <Ionicons
          name={isFavourite ? 'heart' : 'heart-outline'}
          size={22}
          color={isFavourite ? '#ff5d7d' : '#8b95a1'}
        />
      </Pressable>

      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>{title}</Text>

        <View style={styles.metaRow}>
          <View style={styles.metaItem}>
            <Ionicons name="time-outline" size={14} color="#8b95a1" />
            <Text style={styles.metaText}>{duration}</Text>
          </View>

          <View style={styles.metaItem}>
            <Ionicons name="flame" size={14} color="#ff5d7d" />
            <Text style={styles.metaText}>{calories}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 200,
    borderWidth: 1,
    borderColor: '#ffe0e8',
    borderRadius: 18,
    marginBottom: 18,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 126,
  },
  badgeRow: {
    position: 'absolute',
    top: 12,
    left: 12,
    flexDirection: 'row',
    gap: 8,
  },
  levelBadge: {
    overflow: 'hidden',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: '#fff',
    color: '#111827',
    fontSize: 10,
    fontWeight: '800',
  },
  favoriteButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  cardBody: {
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#111827',
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
    marginTop: 10,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  metaText: {
    color: '#6f7783',
    fontSize: 12,
    fontWeight: '600',
  },
});
