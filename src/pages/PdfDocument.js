import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Image,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ecb75b',
    fontSize: 16,
  },
  section: {
    margin: 10,
    padding: 10,
    height: '100%',
  },
  viewer: {
    width: '100%',
    height: window.innerHeight,
  },
  image: {
    width: 50,
  },
  brand: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: '20',
  },
  ingredientsCard: {
    margin: 10,
    fontSize: 12,
    width: 300,
    height: 400,
    padding: 20,
    backgroundColor: '#4e220d',
    borderRadius: 20,
    color: '#fefcf0',
  },
  nutritionCard: {
    margin: 10,
    fontSize: 12,
    width: 300,
    height: 400,
    padding: 20,
    backgroundColor: '#9b6030',
    borderRadius: 20,
    color: '#fefcf0',
  },
});

const PdfDocument = () => {
  return (
    <PDFViewer style={styles.viewer}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <View style={styles.brand}>
              <Image style={styles.image} src="./images/logo.png" />
              <Text>Mr. Beast Burger</Text>
            </View>

            <View style={styles.ingredientsCard}>
              <Text>Ingrediente pentru 1 portie de "RETETA"</Text>
            </View>
            <View style={styles.nutritionCard}>
            <Text>Valori nutritionale pentru 100 grame de "RETETA"</Text>
            </View>

          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default PdfDocument;
