import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, ImageBackground, Alert } from 'react-native';
import bg from '../assets/board.png'
import Cell from '../components/Cell'
import Gear from '../components/Gear'

const copyArray = (original) => {
    const copy = original.map((arr) => {
        return arr.slice();
    });
    return copy;
}

const Game = ({ gameRule, gameMode, p1Icons, p2Icons, initPlayer }) => {

    const emptyMap = [
        ['', '', ''], // 1st row
        ['', '', ''], // 2nd row
        ['', '', ''], // 3rd row
    ];
    const [map, setMap] = useState(emptyMap);
    const [currentPlayer, setCurrentPlayer] = useState(initPlayer);
    const [step, setStep] = useState(0);

    useEffect(() => {
        const winner = getWinner(map);
        if (winner) {
            gameEnd(winner);
        } else if (currentPlayer == 'o' && gameMode !== "LOCAL") {
            botTurn();
        }
    }, [map, gameMode]);

    const onPress = (rowIndex, columnIndex) => {
        if (map[rowIndex][columnIndex] != '') {
            Alert.alert("Position already occupied");
            return;
        }

        // console.log("Pressing [" + rowIndex + "," + columnIndex + "], step = " + step + ", current move =" + currentPlayer + Math.floor(step / 2 + 1));
        setMap((existingMap) => {
            const updatedMap = [...existingMap];
            const currentMove = currentPlayer + Math.floor(step / 2 + 1);
            if (gameRule == "LIMITED") {
                map.forEach((row, rowNum) => {
                    row.forEach((cell, colNum) => {
                        if (cell === currentMove) {
                            updatedMap[rowNum][colNum] = '';
                        }
                    })
                });
            }
            updatedMap[rowIndex][columnIndex] = currentMove;
            return updatedMap;
        });

        if (step == 5) {
            setStep(0);
        } else {
            setStep(step + 1);
        }
        setCurrentPlayer(currentPlayer === 'x' ? 'o' : 'x');
    };

    const getWinner = (currentMap) => {
        // check rows
        for (let i = 0; i < 3; i++) {
            const isRowXwinning = currentMap[i].every(cell => cell[0] == 'x')
            const isRowOwinning = currentMap[i].every(cell => cell[0] == 'o')

            if (isRowXwinning) {
                return "x"
            }
            if (isRowOwinning) {
                return "o"
            }
        }

        // check columns
        for (let col = 0; col < 3; col++) {
            let isColumnXWinner = true;
            let isColumnOWinner = true;

            for (let row = 0; row < 3; row++) {
                if (currentMap[row][col][0] != 'x') {
                    isColumnXWinner = false;
                }
                if (currentMap[row][col][0] != 'o') {
                    isColumnOWinner = false;
                }
            }

            if (isColumnXWinner) {
                return "x"
            }
            if (isColumnOWinner) {
                return "o"
            }
        }

        // check diagonals
        let isDiagnoal1OWinning = true;
        let isDiagnoal1XWinning = true;
        let isDiagnoal2OWinning = true;
        let isDiagnoal2XWinning = true;

        for (let i = 0; i < 3; i++) {
            if (currentMap[i][i][0] != 'o') {
                isDiagnoal1OWinning = false;
            }
            if (currentMap[i][i][0] != 'x') {
                isDiagnoal1XWinning = false;
            }
            if (currentMap[i][2 - i][0] != 'o') {
                isDiagnoal2OWinning = false;
            }
            if (currentMap[i][2 - i][0] != 'x') {
                isDiagnoal2XWinning = false;
            }
        }

        if (isDiagnoal1XWinning || isDiagnoal2XWinning) {
            return "x"
        }
        if (isDiagnoal1OWinning || isDiagnoal2OWinning) {
            return "o"
        }

        // check tie
        if (!currentMap.some(row => row.some(cell => cell == ''))) {
            return "t";
        }
    }

    const nextPlayer = (token) => {
        return (token == 'x') ? 'o' : 'x';
    }

    const gameEnd = (player) => {
        if (player == 't') {
            Alert.alert(`It is a TIE`, `Everyone are happy~ SUPER!`, [
                {
                    text: "Restart",
                    onPress: resetGame,
                },
            ]);
        } else {
            Alert.alert(`Huraay!`, `Player ${player == 'x' ? '1' : '2'} won!`, [
                {
                    text: "Restart",
                    onPress: resetGame,
                },
            ]);
        }
    }

    const resetGame = () => {
        setCurrentPlayer(initPlayer);
        setStep(0);
        setMap(emptyMap);
    }

    const emptySquares = (currentMap) => {
        // collect all possible options
        let possiblePositions = [];

        currentMap.forEach((row, rowIndex) => {
            row.forEach((cell, columnIndex) => {
                if (cell === '') {
                    possiblePositions.push({
                        row: rowIndex,
                        col: columnIndex,
                    });
                }
            })
        })
        return possiblePositions;
    }

    const botTurn = () => {
        let possiblePositions = emptySquares(map);
        let chosenOption = possiblePositions[Math.floor(Math.random() * possiblePositions.length)];
        let currentMove = 'o' + Math.floor(step / 2 + 1);
        let nextMove = 'x' + (Math.floor(step / 2 + 0.5) % 3 + 1);
        let myPosition, enemyPosition;

        if (gameRule == 'LIMITED') {
            map.forEach((row, rowNum) => {
                row.forEach((cell, colNum) => {
                    if (cell === currentMove) {
                        myPosition = { row: rowNum, col: colNum };
                    }
                    if (cell === nextMove) {
                        enemyPosition = { row: rowNum, col: colNum };
                    }
                })
            });
            // console.log("bot turn [step = " + step + ", currentMove = " + currentMove + ", nextMove = " + nextMove + "]");
        }

        if (gameMode == 'MEDIUM') {
            // defend
            possiblePositions.forEach((cell) => {
                const tempMap = copyArray(map);
                if (gameRule == 'LIMITED' && enemyPosition) {
                    tempMap[enemyPosition.row][enemyPosition.col] = '';
                }
                tempMap[cell.row][cell.col] = nextMove;
                if (getWinner(tempMap) == 'x') {
                    chosenOption = cell;
                }
            });

            // attack
            possiblePositions.forEach((cell) => {
                const tempMap = copyArray(map);
                if (gameRule == 'LIMITED' && myPosition) {
                    tempMap[myPosition.row][myPosition.col] = '';
                }
                tempMap[cell.row][cell.col] = currentMove;
                if (getWinner(tempMap) == 'o') {
                    chosenOption = cell;
                }
            });
        } else if (gameMode == 'HARD') {
            chosenOption = minimax(map, 'o', step, 6).position;
        }

        onPress(chosenOption.row, chosenOption.col);
    }

    const minimax = (board, player, step, cpu) => {
        if (getWinner(board) == 'x') {
            return { score: -1 * (cpu + 1) };
        } else if (getWinner(board) == 'o') {
            return { score: 1 * (cpu + 1) };
        } else if (getWinner(board) == 't') {
            return { score: 0 };
        }

        let moves = [];
        let possiblePositions = emptySquares(board);

        if (cpu == 0) {
            return { score: 0, position: possiblePositions[Math.floor(Math.random() * possiblePositions.length)] }
        }

        let currentMove = player + Math.floor(step / 2 + 1);
        let myPosition;

        if (gameRule == 'LIMITED') {
            map.forEach((row, rowNum) => {
                row.forEach((cell, colNum) => {
                    if (cell === currentMove) {
                        myPosition = { row: rowNum, col: colNum };
                    }
                })
            });
        }

        possiblePositions.forEach((cell) => {
            const tempBoard = copyArray(board);
            if (gameRule == 'LIMITED' && myPosition) {
                tempBoard[myPosition.row][myPosition.col] = '';
            }                
            tempBoard[cell.row][cell.col] = currentMove;
            const tempScore = minimax(tempBoard, nextPlayer(player), (step + 1) % 6, cpu - 1).score;
            moves.push({ score: tempScore, position: cell });
        })

        let bestMove = { score: 1000 }
        if (player == 'o') {
            bestMove = { score: -1000 };
        }

        moves.forEach((move) => {
            if ((player == 'o' && move.score > bestMove.score) || (player == 'x' && move.score < bestMove.score)) {
                bestMove = move;
            }
        });

        return bestMove;
    }

    return (
        <ImageBackground source={bg} style={styles.bg} resizeMode="contain">
            <Gear />
            <Text style={styles.text}>
                Current Turn:
            </Text>
            <View style={styles.currentPlayer}>
                {currentPlayer === 'x' && <Image style={styles.image} source={(gameRule == 'LIMITED') ? p1Icons[Math.floor(step / 2 + 1)] : p1Icons[0]} />}
                {currentPlayer === 'o' && <Image style={styles.image} source={(gameRule == 'LIMITED') ? p2Icons[Math.floor(step / 2 + 1)] : p2Icons[0]} />}
            </View>
            <View style={styles.map}>
                {map.map((row, rowIndex) => (
                    <View key={`row-${rowIndex}`} style={styles.row}>
                        {row.map((cell, columnIndex) => (
                            <Cell
                                key={`row-${rowIndex}-col-${columnIndex}`}
                                cell={cell}
                                onPress={() => onPress(rowIndex, columnIndex)}
                                gameRule={gameRule}
                                p1Icons={p1Icons}
                                p2Icons={p2Icons}
                            />
                        ))}
                    </View>
                ))}
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    bg: {
        width: "100%",
        height: "103%",
        alignItems: "center",
        justifyContent: "center",
    },
    map: {
        width: "90%",
        aspectRatio: 1.1,
    },
    currentPlayer: {
        position: "absolute",
        top: 150,
        left: 250,
        alignItems: "center",
        width: "100%",
        height: 70,
        flex: 1,
        flexDirection: "row",
    },
    text: {
        fontSize: 24,
        color: "black",
        position: "absolute",
        top: 170,
        left: 90,
    },
    row: {
        flex: 1,
        flexDirection: "row",
    },
    image: {
        width: 55,
        height: 55,
        resizeMode: 'contain',
    },
})
export default Game;