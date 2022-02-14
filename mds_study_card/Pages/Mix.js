import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Mix = () => {
  const [Score, setScore] = useState(0);
  const [WordListe, setWordListe] = useState([]);
  const [Word, setWord] = useState({});
  const [Answer, setAnswer] = useState('');
  const [Start, setStart] = useState(true);
  const [HeighScroe, setHighScore] = useState(0);
  const [WordControl, setWordControl] = useState(true);

  useEffect(() => {
    getWordList();
    getHighScore();
  }, []);

  // ger word list
  const getWordList = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('WordList');
      if (jsonValue !== null) {
        await setWordListe(JSON.parse(jsonValue));
      }
    } catch (e) {
      // error reading value
    }
  };

  // get  Hight score
  const getHighScore = async () => {
    try {
      const value = await AsyncStorage.getItem('HighScoreData');
      if (value !== null) {
        setHighScore(parseInt(value));
      }
    } catch (e) {
      // error reading value
    }
  };

  // random word
  const randomWord = () => {
    try {
      let item = WordListe[Math.floor(Math.random() * WordListe.length)];
      if (item === undefined) {
        setWordControl(false);
      }
      setWord(item);
      console.log(item);
    } catch (error) {
      setWordControl(false);
    }
  };

  // Change word
  const changeWord = () => {
    randomWord();
    setScore(0);
    setStart(false);
  };
  // Check word
  const checkWord = text => {
    setAnswer(text);
    if (WordControl) {
      if (text.toLowerCase() === Word.word2.toLowerCase()) {
        let score = Score;
        score++;
        setScore(score);
        setAnswer('');
        randomWord();
        saveLastScore();
        heighScoreCheck();
      }
    }
  };

  // Last score save
  const saveLastScore = async () => {
    try {
      let tmp = Score;
      tmp++;
      await AsyncStorage.setItem('LastScoreData', tmp.toString());
    } catch (e) {
      // saving error
    }
  };

  // Heigh score
  const heighScoreCheck = async () => {
    let score = Score;
    score++;
    if (score >= HeighScroe) {
      try {
        await AsyncStorage.setItem('HighScoreData', score.toString());
      } catch (e) {
        // saving error
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.scoreContainer}>
        <View style={styles.scoreTable}>
          <Text style={styles.scoreText}>{Score}</Text>
          <Text style={styles.scoreText}>Score</Text>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.text}>
          {WordControl ? Word.word : 'Your word list is empty'}
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Meaning of the word"
          placeholderTextColor={'white'}
          onChangeText={text => checkWord(text)}
          value={Answer}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.changeButton} onPress={() => changeWord()}>
          <Text style={styles.changeButtonText}>Change Word</Text>
        </Pressable>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={Start === true ? styles.startButton : styles.startButtonHidden}
          onPress={() => changeWord()}>
          <Text style={styles.changeButtonText}>Start</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '85%',
  },
  scoreContainer: {
    alignItems: 'center',
  },
  scoreTable: {
    marginTop: '20%',
    backgroundColor: '#353432',
    width: '80%',
    padding: '3%',
    alignItems: 'center',
    borderRadius: 10,
  },
  scoreText: {
    color: 'white',
    fontSize: 24,
  },
  text: {
    backgroundColor: '#707070',
    width: '90%',
    padding: '3%',
    borderRadius: 10,
    fontSize: 18,
    color: 'white',
    marginTop: '10%',
    textAlign: 'center',
  },
  textInput: {
    backgroundColor: '#707070',
    width: '90%',
    padding: '3%',
    borderRadius: 10,
    fontSize: 18,
    color: 'white',
    marginTop: '10%',
  },
  inputContainer: {
    alignItems: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: '10%',
  },
  changeButton: {
    backgroundColor: '#AC6935',
    width: '80%',
    alignItems: 'center',
    padding: '1%',
    borderRadius: 15,
  },
  changeButtonText: {
    color: 'white',
    fontSize: 24,
  },
  startButton: {
    backgroundColor: '#338a3e',
    width: '80%',
    alignItems: 'center',
    padding: '1%',
    borderRadius: 15,
  },
  startButtonHidden: {
    opacity: 0.0,
    height: 0,
  },
});

export default Mix;
