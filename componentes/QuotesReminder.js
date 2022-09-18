import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { getDataFrom, addItemTo } from '../utils';

const initialState = {
  author: '',
  quoteContent: '',
  date: undefined,
};

const QuotesReminder = () => {
  const [quoteForm, setQuoteForm] = useState(initialState);
  const [quotes, setQuotes] = useState([]);

  const addNewItem = async () => {
    setQuoteForm({...quoteForm, date: new Date()});

    try {
      await addItemTo('quotes', quoteForm);
      setQuotes([...quotes, quoteForm]);
    } catch (error) {
      console.log(error);
    }
  };

  const onInputTextChange = (name, txt) => {
    setQuoteForm({...quoteForm, [name]: txt});
  };

  useEffect(() => {
     async function getQuotes() {
      const qts = await getDataFrom('quotes');
      setQuotes(qts);
    }
    getQuotes();
  }, []);

  return(
    <View style={{marginTop: 10, alignItems: 'center', width: '100%'}}>
      <View style={ styles.form }>
        <Text style={ styles.title }>Crea una nueva cita</Text>

        <Text>Nombre del autor</Text>
        <TextInput style={ styles.textInput }
          onChangeText={txt => onInputTextChange('author', txt)} placeholder="Quote author" />
        
        <Text style={{textAlign: 'left'}}>Texto de la cita</Text>
        <TextInput multiline={true} style={styles.textareaInput}
          onChangeText={txt => onInputTextChange('quoteContent', txt)} placeholder="Quote text" />
        <Button style={ styles.submitBtn }
          onPress={addNewItem} title="Añadir cita" />
      </View>

      {quotes.map(({ author, quoteContent }) => {
        return(
          <View>
            <Text>{ author }</Text>
            <Text>{ quoteContent }</Text>
          </View>
        )}
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  form:{
    width: '85%',
    justifyContent: 'flex-start',
  },
  textInput: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  textareaInput: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
  submitBtn: {
    margin: 15,
  },
});

export default QuotesReminder;