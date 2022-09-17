import { View, Text, TextInput, Button } from 'react-native';
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
    <View style={{alignItems: 'center', width: '100%'}}>
      <Text style={{textAlign: 'left'}}>Nombre del autor</Text>
      <TextInput onChangeText={txt => onInputTextChange('author', txt)} placeholder="Movie-name" />

      <Text style={{textAlign: 'left'}}>Texto de la cita</Text>
      <TextInput onChangeText={txt => onInputTextChange('quoteContent', txt)} placeholder="Movie-img" />

      <Button onPress={addNewItem} title="Añadir cita" />

      {quotes.map((q) => <View><Text>{ q.author }</Text></View>)}
    </View>
  );
};

export default QuotesReminder;