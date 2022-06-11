import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Kbd, Stack, Center, Box } from '@chakra-ui/react'

import React from 'react'

export default function Home() {


    const [height, setHeight] = React.useState(0)
    const [string, setString] = React.useState('Your text here')
    const [letter, setLetter] = React.useState('A')

    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'space']

    let handleKey = (e) => {

        if (string == 'Your text here') {
            setString('')
        }


        console.log(e)
        if (e.key === 'v') {
            if (letters.indexOf(letter) < letters.length - 1) {
                setLetter(letters[letters.indexOf(letter) + 1])
            } else {
                setLetter(letters[0])
            }
        } else if (e.key === 'm') {
            if (letter !== 'space') {
            setString(string + letter)
            } else {
                setString(string + ' ')
            }
            setLetter('A')
        } else if (e.key === 'c') {
            console.log(letters.indexOf(letter), letter)
            if (letter != 'A') {
                setLetter(letters[letters.indexOf(letter) - 1])
            } else {
                setLetter(letters[letters.length - 1])
            }
        }
    }

    React.useEffect(() => {
        setHeight(window.innerHeight)

        document.addEventListener('keydown', handleKey)

        document.addEventListener('resize', () => {
            setHeight(window.innerHeight)
        })

        return () => {
            document.removeEventListener('resize', () => {
                setHeight(window.innerHeight)
            })
            document.removeEventListener('keydown', handleKey)

        }
        })

  return (
    <div className={styles.container} tabIndex={0} onKeyDown={handleKey}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
          <Center h={height}>
          <Stack direction='column'>
            <Stack direction='row'>
                {letters.map(alp => {
                    if (alp == letter) {
                            return <Box borderWidth={1} backgroundColor='lightGreen' padding={3} borderRadius={4} paddingLeft={3} paddingRight={3} textStyle={'italic'}>{alp}</Box>
                    } else {
                            return <Box borderWidth={1} padding={3} borderRadius={4} paddingLeft={3} paddingRight={3}>{alp}</Box>
                    }
                })}
                </Stack>
            <Center>
          <Stack direction='column'>

        <br />
              <Box borderWidth={1} padding={5} borderRadius={10} width={200}>
        <p><Kbd>C</Kbd> - Previous Letter</p>
        <p><Kbd>V</Kbd> - Next Letter</p>
        <br />
        <p><Kbd>M</Kbd> - Add letter</p>
        </Box>
        <br />
        <Box borderWidth={1} padding={5} borderRadius={10} width={170}>
        <p>{letter}</p>
        <p>{string}</p>
        </Box>
        </Stack>
        </Center>
        </Stack>

        </Center>
      </div>
    </div>
  )
}
