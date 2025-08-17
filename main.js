// src/main.js
import { Preload } from './scenes/Preload.js';
import { IntroScene } from './scenes/IntroScene.js';
import { Menu } from './scenes/Menu.js';
import { Despertar } from './scenes/Despertar.js';
import { Correr } from './scenes/Correr.js';
import { Llegada } from './scenes/Llegada.js';
import { IniDiaScene } from './scenes/IniDiaScene.js';
import { RespuestaScene } from './scenes/RespuestaScene.js';
import { OverworldScene } from './scenes/OverworldScene.js';
import { EpilogoScene } from './scenes/EpilogoScene.js';

export const scenes = [
    Preload,
    IntroScene,
    Menu,
    Despertar,
    Correr,
    Llegada,
    IniDiaScene,
    RespuestaScene,
    OverworldScene,
    EpilogoScene
];
