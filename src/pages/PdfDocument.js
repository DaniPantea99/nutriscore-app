import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Image,
  Font, 
} from '@react-pdf/renderer';

// Font.register({ family: 'Roboto', src: source });

const styles = StyleSheet.create({
  viewer: {
    width: '100%',
    height: window.innerHeight,
  },
  page: {
    backgroundColor: '#ecb75b',
    fontSize: 16,
  },
  section: {
    margin: 10,
    padding: 10,
    height: '100%',
    // fontFamily: 'Roboto',

  },
  brand: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: '20',
  },
  image: {
    width: 120,
    backgroundColor: '#232323',
    borderRadius: 20,

  },
  recipeTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 100,
    marginBottom: 80,
    fontSize: 42,
  },
  cards: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
  },
  ingredientsCard: {
    flexDirection: 'column',
    fontSize: 12,
    width: 220,
    minHeight: 200,
    padding: 20,
    backgroundColor: '#4e220d',
    borderRadius: 20,
    color: '#fefcf0',
  },
  nutritionCard: {
    flexDirection: 'column',
    fontSize: 12,
    width: 220,
    minHeight: 200,
    padding: 20,
    backgroundColor: '#9b6030',
    borderRadius: 20,
    color: '#fefcf0',
  },
  ingredientsCardTitle: {
    backgroundColor: '#9b6030',
    borderRadius: 30,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 18,
    textAlign: 'center',
  },
  nutritionCardTitle: {
    backgroundColor: '#4e220d',
    borderRadius: 30,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 18,
    textAlign: 'center',
  },
  cardContent: {
    flexGrow: 1,
    marginVertical: 10,
  },
  cardFooter: {
    fontSize: 8,
  },
});

const PdfDocument = () => {
  return (
    <PDFViewer style={styles.viewer}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <View style={styles.brand}>
              <Image style={styles.image} src="./images/bon-appetit-bistro-logo.png" />
              <Text>Bon Appetit Bistro</Text>
            </View>

            <View style={styles.recipeTitle}>
              <Text>NUMELE RETETEI</Text>
            </View>

            <View style={styles.cards}>
              <View style={styles.ingredientsCard}>
                <View style={styles.ingredientsCardTitle}>
                  <Text>Ingrediente</Text>
                </View>
                <Text style={styles.cardContent}>Lista de ingrediente...</Text>
                <Text style={styles.cardFooter}>*Ingrediente pentru 1 portie reteta</Text>
              </View>
              <View style={styles.nutritionCard}>
                <View style={styles.nutritionCardTitle}>
                  <Text>Valori nutritionale</Text>
                </View>
                <Text style={styles.cardContent}>Lista de nutrienti...</Text>
                <Text style={styles.cardFooter}>*Valori nutritionale pentru 100 grame reteta</Text>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default PdfDocument;
