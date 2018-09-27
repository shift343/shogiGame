// 共通ファイル読み込み
import "./common/commonVar.js";
import "./common/commonFunc.js";
import "./common/globalVar.js";
import "./common/globalFunc.js";
import Game from "./components/game.js"; window.Game = Game;
import Piece from "./components/piece.js"; window.Piece = Piece;
import Board from "./components/board.js"; window.Board = Board;
import "./components/komaAction.js";