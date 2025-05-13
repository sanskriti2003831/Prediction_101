import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Palette } from 'lucide-react';
import RunwayImageCard from './RunwayImageCard';

const imagesPerPage = 10;

interface ShowImage {
  id: string;
  imageUrl: string;
  look: number;
  colorPalette: string[];
}

interface Show {
  id: string;
  name: string;
  season: string;
  year: string;
  images: ShowImage[];
}

const designerShows: Record<string, Show[]> = {
  jacquemus: [
    {
      id: 'jacquemus-ss25',
      name: 'LA CROISIÈRE',
      season: 'Spring/Summer',
      year: '2025',
      images: [
        { id: '1', imageUrl: '/images/AllRunwayImages/JacquemusLook1.png', look: 1, colorPalette: ['#ebe2d9', '#cfb8a2', '#9e7b62', '#956f55', '#c9ae8e'] },
        { id: '2', imageUrl: '/images/AllRunwayImages/JacquemusLook2.png', look: 2, colorPalette: ['#ffb9b9', '#5a4432', '#c5b097', '#8e7f69', '#e7d9bb'] },
        { id: '3', imageUrl: '/images/AllRunwayImages/JacquemusLook3.png', look: 3, colorPalette: ['#f4e4d0', '#dcb18c', '#9a7f5d', '#735f43', '#bda99e'] },
        { id: '4', imageUrl: '/images/AllRunwayImages/JacquemusLook4.png', look: 4, colorPalette: ['#d7b2a1', '#9e7a6b', '#d4c2b6', '#bfa4a1', '#84735d'] },
        { id: '5', imageUrl: '/images/AllRunwayImages/JacquemusLook5.png', look: 5, colorPalette: ['#f3e4d2', '#e1c19a', '#8f6c3f', '#a68e73', '#c7bda8'] },
        { id: '6', imageUrl: '/images/AllRunwayImages/JacquemusLook6.png', look: 6, colorPalette: ['#ffdfb9', '#9c7a49', '#c3a28b', '#7b5d39', '#b9b09a'] },
        { id: '7', imageUrl: '/images/AllRunwayImages/JacquemusLook7.png', look: 7, colorPalette: ['#e0d2b4', '#8f7d5c', '#ad9f88', '#bf9f84', '#c4b89b'] },
        { id: '8', imageUrl: '/images/AllRunwayImages/JacquemusLook8.png', look: 8, colorPalette: ['#f1c6b8', '#c6a8a3', '#9c7568', '#b09d8b', '#b3b6a4'] },
        { id: '9', imageUrl: '/images/AllRunwayImages/JacquemusLook9.png', look: 9, colorPalette: ['#ffdebb', '#ad7c55', '#b99d7d', '#c1a28e', '#a57c6b'] },
        { id: '10', imageUrl: '/images/AllRunwayImages/JacquemusLook10.png', look: 10, colorPalette: ['#f1c6b9', '#af8f6e', '#a59a86', '#ba967a', '#d6d2bd'] },
        { id: '11', imageUrl: '/images/AllRunwayImages/JacquemusLook11.png', look: 11, colorPalette: ['#f2e0d3', '#9f8060', '#c2b29f', '#b19f86', '#8e7b6f'] },
        { id: '12', imageUrl: '/images/AllRunwayImages/JacquemusLook12.png', look: 12, colorPalette: ['#f4d6c1', '#9b7d5a', '#b28e6c', '#c5a783', '#e3d8b6'] },
        { id: '13', imageUrl: '/images/AllRunwayImages/JacquemusLook13.png', look: 13, colorPalette: ['#f1d7b5', '#c6a689', '#b19e7d', '#aa7e5d', '#e0c9a0'] },
        { id: '14', imageUrl: '/images/AllRunwayImages/JacquemusLook14.png', look: 14, colorPalette: ['#f0b8a0', '#b98f73', '#7e5c4a', '#c4b39b', '#8f7462'] },
        { id: '15', imageUrl: '/images/AllRunwayImages/JacquemusLook15.png', look: 15, colorPalette: ['#f2d2b0', '#d5b094', '#8d6e3e', '#a38264', '#b59e84'] },
        { id: '16', imageUrl: '/images/AllRunwayImages/JacquemusLook16.png', look: 16, colorPalette: ['#ffb8b5', '#a67b61', '#b88d7a', '#9f7d5a', '#f3c8b1'] },
        { id: '17', imageUrl: '/images/AllRunwayImages/JacquemusLook17.png', look: 17, colorPalette: ['#e9d0b1', '#a87c53', '#a27b66', '#c7a48a', '#bfa68b'] },
        { id: '18', imageUrl: '/images/AllRunwayImages/JacquemusLook18.png', look: 18, colorPalette: ['#e2d1b4', '#b7a68a', '#8e755d', '#c4af98', '#8c6d56'] },
        { id: '19', imageUrl: '/images/AllRunwayImages/JacquemusLook19.png', look: 19, colorPalette: ['#e8c3a2', '#b5926c', '#997d5a', '#8c684e', '#e3d0b0'] },
        { id: '20', imageUrl: '/images/AllRunwayImages/JacquemusLook20.png', look: 20, colorPalette: ['#f1d6b4', '#a88c72', '#9d8a6f', '#c1a08a', '#a17d68'] },
        { id: '21', imageUrl: '/images/AllRunwayImages/JacquemusLook21.png', look: 21, colorPalette: ['#ffd9b3', '#d49e6c', '#d0b28a', '#e3c29d', '#b88a6b'] },
        { id: '22', imageUrl: '/images/AllRunwayImages/JacquemusLook22.png', look: 22, colorPalette: ['#f7c8a2', '#a8846d', '#9e7758', '#bb9a78', '#d0c6b1'] },
        { id: '23', imageUrl: '/images/AllRunwayImages/JacquemusLook23.png', look: 23, colorPalette: ['#ffcc99', '#cfa07d', '#a68b68', '#d8b996', '#e4d6b0'] },
        { id: '24', imageUrl: '/images/AllRunwayImages/JacquemusLook24.png', look: 24, colorPalette: ['#ffd9ab', '#b87f4a', '#9a6d45', '#b89d7a', '#e5d6ab'] },
        { id: '25', imageUrl: '/images/AllRunwayImages/JacquemusLook25.png', look: 25, colorPalette: ['#f1c8a9', '#9b7b5a', '#b8a38c', '#c1b89e', '#9d7c59'] },
        { id: '26', imageUrl: '/images/AllRunwayImages/JacquemusLook26.png', look: 26, colorPalette: ['#f8cdb9', '#9f7c5d', '#a68d74', '#b59e87', '#b79d74'] },
        { id: '27', imageUrl: '/images/AllRunwayImages/JacquemusLook27.png', look: 27, colorPalette: ['#f1c0a0', '#c98a62', '#9b7f5d', '#b99c85', '#e2d1b0'] },
        { id: '28', imageUrl: '/images/AllRunwayImages/JacquemusLook28.png', look: 28, colorPalette: ['#f2d3b3', '#9e7a56', '#b88e6b', '#c4ad8b', '#8d6f4c'] },
        { id: '29', imageUrl: '/images/AllRunwayImages/JacquemusLook29.png', look: 29, colorPalette: ['#f5c9a0', '#9e6a42', '#b98b64', '#7f6b4e', '#c7a78d'] },
        { id: '30', imageUrl: '/images/AllRunwayImages/JacquemusLook30.png', look: 30, colorPalette: ['#ffb79d', '#8f6a4d', '#c4a27d', '#9e7b5b', '#c9a58a'] },
        { id: '31', imageUrl: '/images/AllRunwayImages/JacquemusLook31.png', look: 31, colorPalette: ['#f4d0b4', '#8e6d44', '#9b7e63', '#c5a080', '#d8c8b1'] },
        { id: '32', imageUrl: '/images/AllRunwayImages/JacquemusLook32.png', look: 32, colorPalette: ['#e5d0ab', '#9f7d5f', '#b8976a', '#a3805e', '#c8b698'] },
        { id: '33', imageUrl: '/images/AllRunwayImages/JacquemusLook33.png', look: 33, colorPalette: ['#f1c1b2', '#9b6f4a', '#b78e69', '#9f7b5d', '#e2cdb0'] },
        { id: '34', imageUrl: '/images/AllRunwayImages/JacquemusLook34.png', look: 34, colorPalette: ['#f7cc96', '#9c7b5d', '#bfa68b', '#a78e68', '#d4c7a6'] },
        { id: '35', imageUrl: '/images/AllRunwayImages/JacquemusLook35.png', look: 35, colorPalette: ['#f4d9ab', '#b17f60', '#9c6a4c', '#c5a686', '#8f7a58'] },
        { id: '36', imageUrl: '/images/AllRunwayImages/JacquemusLook36.png', look: 36, colorPalette: ['#f8c8b5', '#9e7b5e', '#bfa17e', '#7d5e45', '#d1c7a2'] },
        { id: '37', imageUrl: '/images/AllRunwayImages/JacquemusLook37.png', look: 37, colorPalette: ['#f5d7b8', '#9a6d46', '#b79d77', '#c3a38b', '#c1b98c'] },
        { id: '38', imageUrl: '/images/AllRunwayImages/JacquemusLook38.png', look: 38, colorPalette: ['#f1c1a3', '#9c6d50', '#b89b72', '#d2c4a7', '#b98d6b'] },
        { id: '39', imageUrl: '/images/AllRunwayImages/JacquemusLook39.png', look: 39, colorPalette: ['#f3e1b1', '#9e7a5e', '#b78a64', '#7f5e42', '#e3d1b0'] },
        { id: '40', imageUrl: '/images/AllRunwayImages/JacquemusLook40.png', look: 40, colorPalette: ['#f5c7a1', '#a88d6a', '#bca67e', '#c8ad84', '#e1d7b1'] },
        { id: '41', imageUrl: '/images/AllRunwayImages/JacquemusLook41.png', look: 41, colorPalette: ['#ffcb9e', '#9e7a55', '#bca08a', '#c9b89e', '#d7c7a5'] }
        
    
      ]
    }
  ],
  chanel: [
    {
      id: 'chanel-ss25',
      name: 'Spring/Summer Collection 2025',
      season: 'Spring/Summer',
      year: '2025',
      images: [{ id: '1', imageUrl: '/images/AllRunwayImages/ChanelLook1.png', look: 1, colorPalette: ['#9b9a96', '#d8d8d1', '#8a8a82', '#d1c7b7', '#e1dcd0'] },
      { id: '2', imageUrl: '/images/AllRunwayImages/ChanelLook2.png', look: 2, colorPalette: ['#f0e4d7', '#c3b8a7', '#9a8578', '#b8a592', '#edcba2'] },
      { id: '3', imageUrl: '/images/AllRunwayImages/ChanelLook3.png', look: 3, colorPalette: ['#f3e0c2', '#d0a78c', '#b4967f', '#b0a28f', '#e1d1b0'] },
      { id: '4', imageUrl: '/images/AllRunwayImages/ChanelLook4.png', look: 4, colorPalette: ['#f0e4b7', '#d0a58d', '#9a8b6e', '#b5a18c', '#e2d7a2'] },
      { id: '5', imageUrl: '/images/AllRunwayImages/ChanelLook5.png', look: 5, colorPalette: ['#e4d0a7', '#c8b59f', '#b09b7f', '#a38c6a', '#d7d4b6'] },
      { id: '6', imageUrl: '/images/AllRunwayImages/ChanelLook6.png', look: 6, colorPalette: ['#f2e2c1', '#d1a87d', '#a78d62', '#a19d8b', '#e1d1a3'] },
      { id: '7', imageUrl: '/images/AllRunwayImages/ChanelLook7.png', look: 7, colorPalette: ['#f4e0b9', '#d0a274', '#9c7c53', '#8f7a59', '#bfb89b'] },
      { id: '8', imageUrl: '/images/AllRunwayImages/ChanelLook8.png', look: 8, colorPalette: ['#f3dcb6', '#b79d7a', '#9c8163', '#a48c7d', '#c8c1b2'] },
      { id: '9', imageUrl: '/images/AllRunwayImages/ChanelLook9.png', look: 9, colorPalette: ['#f1c7a8', '#d1b49a', '#a68b70', '#9b7f5f', '#e1d2a3'] },
      { id: '10', imageUrl: '/images/AllRunwayImages/ChanelLook10.png', look: 10, colorPalette: ['#f0cfa4', '#c8a88c', '#b09071', '#a28c69', '#d6c7a5'] },
      { id: '11', imageUrl: '/images/AllRunwayImages/ChanelLook11.png', look: 11, colorPalette: ['#f1e0c6', '#c9a479', '#b29a6e', '#a58b74', '#d9cfa8'] },
      { id: '12', imageUrl: '/images/AllRunwayImages/ChanelLook12.png', look: 12, colorPalette: ['#f4e1b7', '#b79d7b', '#a88b6e', '#a18771', '#e1d6a2'] },
      { id: '13', imageUrl: '/images/AllRunwayImages/ChanelLook13.png', look: 13, colorPalette: ['#f2d8a3', '#c8a68a', '#9e8a64', '#9f8e72', '#d6c8a2'] },
      { id: '14', imageUrl: '/images/AllRunwayImages/ChanelLook14.png', look: 14, colorPalette: ['#f0e3b4', '#d0b09e', '#a89e7a', '#8e7a64', '#e0d9b0'] },
      { id: '15', imageUrl: '/images/AllRunwayImages/ChanelLook15.png', look: 15, colorPalette: ['#f3c8a5', '#d4a479', '#a98d62', '#9f8a5c', '#d7c7a1'] },
      { id: '16', imageUrl: '/images/AllRunwayImages/ChanelLook16.png', look: 16, colorPalette: ['#e5d1b0', '#b79f7d', '#a98a69', '#a1846a', '#d1c8a7'] },
      { id: '17', imageUrl: '/images/AllRunwayImages/ChanelLook17.png', look: 17, colorPalette: ['#f4e2c7', '#d0b28c', '#9e8d63', '#a68a72', '#e2d3a6'] },
      { id: '18', imageUrl: '/images/AllRunwayImages/ChanelLook18.png', look: 18, colorPalette: ['#f2d1a0', '#c8a77c', '#a78b60', '#9e7b5e', '#e1c79e'] },
      { id: '19', imageUrl: '/images/AllRunwayImages/ChanelLook19.png', look: 19, colorPalette: ['#f5d2a4', '#b79b6d', '#9e8c55', '#8c7a5b', '#d6c88f'] },
      { id: '20', imageUrl: '/images/AllRunwayImages/ChanelLook20.png', look: 20, colorPalette: ['#f4e2b8', '#d1a87a', '#9e7f62', '#a98b72', '#e3d7a2'] },
      { id: '21', imageUrl: '/images/AllRunwayImages/ChanelLook21.png', look: 21, colorPalette: ['#f1d9a7', '#c9a06e', '#9c7f53', '#9e8a6a', '#d7c68f'] },
      { id: '22', imageUrl: '/images/AllRunwayImages/ChanelLook22.png', look: 22, colorPalette: ['#f2e3b5', '#d0a77a', '#a88c61', '#a68d72', '#e0d9a5'] },
      { id: '23', imageUrl: '/images/AllRunwayImages/ChanelLook23.png', look: 23, colorPalette: ['#f0e1b4', '#b79a6c', '#a58c4e', '#a17d5d', '#e1cfa2'] },
      { id: '24', imageUrl: '/images/AllRunwayImages/ChanelLook24.png', look: 24, colorPalette: ['#f3db9f', '#d1a77b', '#9e8a59', '#a27d5e', '#e3d19a'] },
      { id: '25', imageUrl: '/images/AllRunwayImages/ChanelLook25.png', look: 25, colorPalette: ['#f2c9a5', '#c8a27c', '#a78e65', '#9f7b5b', '#d7c68b'] },
      { id: '26', imageUrl: '/images/AllRunwayImages/ChanelLook26.png', look: 26, colorPalette: ['#f4d0b3', '#c7a67e', '#a98e62', '#9f7b5e', '#d1c79e'] },
      { id: '27', imageUrl: '/images/AllRunwayImages/ChanelLook27.png', look: 27, colorPalette: ['#f1d1a3', '#b89a6b', '#a88d61', '#9e7b5f', '#e3d7a2'] },
      { id: '28', imageUrl: '/images/AllRunwayImages/ChanelLook28.png', look: 28, colorPalette: ['#f5c6a2', '#d1a576', '#9e8c5d', '#9a7b5c', '#e2d2a0'] },
      { id: '29', imageUrl: '/images/AllRunwayImages/ChanelLook29.png', look: 29, colorPalette: ['#f3d0a5', '#b78c6a', '#a78a58', '#9f7c59', '#e0d7a1'] },
      { id: '30', imageUrl: '/images/AllRunwayImages/ChanelLook30.png', look: 30, colorPalette: ['#f2e2b5', '#d1a87b', '#a78e67', '#9b7a53', '#d6c79e'] },
      { id: '31', imageUrl: '/images/AllRunwayImages/ChanelLook31.png', look: 31, colorPalette: ['#f1d6a8', '#c9a77d', '#9e8b60', '#a78d6a', '#e3d7a1'] },
      { id: '32', imageUrl: '/images/AllRunwayImages/ChanelLook32.png', look: 32, colorPalette: ['#f4e0b7', '#c8a77b', '#a88d66', '#9f7b5d', '#e2d6a5'] },
      { id: '33', imageUrl: '/images/AllRunwayImages/ChanelLook33.png', look: 33, colorPalette: ['#f2d7b1', '#c9a77c', '#9e8b64', '#a57b5b', '#d7c8a2'] },
      { id: '34', imageUrl: '/images/AllRunwayImages/ChanelLook34.png', look: 34, colorPalette: ['#f5e2c0', '#b79d75', '#a88b5e', '#a07b5a', '#e1d9a5'] },
      { id: '35', imageUrl: '/images/AllRunwayImages/ChanelLook35.png', look: 35, colorPalette: ['#f3d1b4', '#c7a88a', '#9e7b64', '#a98c5e', '#d6c79f'] },
      { id: '36', imageUrl: '/images/AllRunwayImages/ChanelLook36.png', look: 36, colorPalette: ['#f1e5c2', '#c8a77d', '#a78e66', '#9e7a5f', '#e3d8a4'] },
      { id: '37', imageUrl: '/images/AllRunwayImages/ChanelLook37.png', look: 37, colorPalette: ['#f4cba5', '#c7a77a', '#a88d66', '#a37b57', '#d1c79b'] },
      { id: '38', imageUrl: '/images/AllRunwayImages/ChanelLook38.png', look: 38, colorPalette: ['#f1d7b2', '#d0a87d', '#a58c64', '#9f7b5b', '#e3d2a6'] },
      { id: '39', imageUrl: '/images/AllRunwayImages/ChanelLook39.png', look: 39, colorPalette: ['#f5e0b8', '#c8a779', '#9e8b60', '#9f7c5a', '#d7c79a'] },
      { id: '40', imageUrl: '/images/AllRunwayImages/ChanelLook40.png', look: 40, colorPalette: ['#f1d7a9', '#c8a67c', '#a98d5f', '#a18b5a', '#e1d6a3'] },
      { id: '41', imageUrl: '/images/AllRunwayImages/ChanelLook41.png', look: 41, colorPalette: ['#f4e2b6', '#d0a77a', '#a78e67', '#9e7a5c', '#d7c89f'] },
      { id: '42', imageUrl: '/images/AllRunwayImages/ChanelLook42.png', look: 42, colorPalette: ['#f3d1a4', '#c8a77b', '#a88c62', '#a67b5b', '#e2d8a3'] },
      { id: '43', imageUrl: '/images/AllRunwayImages/ChanelLook43.png', look: 43, colorPalette: ['#f2c8a4', '#c8a76b', '#a78b5e', '#a48c58', '#e3d79f'] },
      { id: '44', imageUrl: '/images/AllRunwayImages/ChanelLook44.png', look: 44, colorPalette: ['#f1d0a5', '#d0a87b', '#a88c61', '#9f7c5a', '#e2d7a1'] },
      { id: '45', imageUrl: '/images/AllRunwayImages/ChanelLook45.png', look: 45, colorPalette: ['#f4e1b8', '#c8a76b', '#9e8b5e', '#9f7b55', '#d7c79f'] },
      { id: '46', imageUrl: '/images/AllRunwayImages/ChanelLook46.png', look: 46, colorPalette: ['#f3e1b6', '#d1a87b', '#a78d60', '#9f7a5d', '#e1d79a'] },
      { id: '47', imageUrl: '/images/AllRunwayImages/ChanelLook47.png', look: 47, colorPalette: ['#f2d7a3', '#c7a77c', '#a78e63', '#a37b59', '#d6c89a'] },
      { id: '48', imageUrl: '/images/AllRunwayImages/ChanelLook48.png', look: 48, colorPalette: ['#f4e0b5', '#d0a87b', '#a78c62', '#9f7b5f', '#e3d7a2'] },
      { id: '49', imageUrl: '/images/AllRunwayImages/ChanelLook49.png', look: 49, colorPalette: ['#f5d0a6', '#d0a77b', '#a88c62', '#a57b5b', '#e2c79f'] },
      { id: '50', imageUrl: '/images/AllRunwayImages/ChanelLook50.png', look: 50, colorPalette: ['#f3e0b8', '#d0a87a', '#a78d63', '#9f7a5d', '#e1d79a'] },
      { id: '51', imageUrl: '/images/AllRunwayImages/ChanelLook51.png', look: 51, colorPalette: ['#f2c8a5', '#d0a77a', '#a88c64', '#9e7b56', '#e3d6a0'] } 
      ]
    }
  ],
  schiaparelli: [
    {
      id: 'schiaparelli-ss25',
      name: 'Spring/Summer Collection 2025',
      season: 'Spring/Summer',
      year: '2025',
      images: [
        { id: '1', imageUrl: '/images/AllRunwayImages/SchiaperelliLook1.png', look: 1, colorPalette: ['#c4b49e', '#efdbd2', '#e9e5d5', '#a4a38d', '#c4c0a7'] },
        { id: '2', imageUrl: '/images/AllRunwayImages/SchiaperelliLook2.png', look: 2, colorPalette: ['#f5e3c7', '#e2d9c2', '#d0c6a5', '#c6b4a1', '#d8c1a5'] },
        { id: '3', imageUrl: '/images/AllRunwayImages/SchiaparelliLook3.png', look: 3, colorPalette: ['#f8e0b7', '#d6b79e', '#c0a68d', '#b99b8a', '#d8c1a5'] },
        { id: '4', imageUrl: '/images/AllRunwayImages/SchiaperelliLook4.png', look: 4, colorPalette: ['#e7d4b4', '#c0b49c', '#a8a28d', '#d9c9b7', '#bcb7a2'] },
        { id: '5', imageUrl: '/images/AllRunwayImages/SchiaperelliLook5.png', look: 5, colorPalette: ['#f5e4b4', '#d1b88f', '#a9976c', '#c6b29b', '#e1d0a1'] },
        { id: '6', imageUrl: '/images/AllRunwayImages/SchiaperelliLook6.png', look: 6, colorPalette: ['#f9e0c4', '#d7b89a', '#c4a57a', '#b39c6a', '#e1d0a0'] },
        { id: '7', imageUrl: '/images/AllRunwayImages/SchiaperelliLook7.png', look: 7, colorPalette: ['#f1c9b5', '#d1ab8e', '#b79c70', '#a58d5b', '#c8b49c'] },
        { id: '8', imageUrl: '/images/AllRunwayImages/SchiaperelliLook8.png', look: 8, colorPalette: ['#f2d6a1', '#c6ad7a', '#a28a5f', '#9e7b50', '#d8c68b'] },
        { id: '9', imageUrl: '/images/AllRunwayImages/SchiaperelliLook9.png', look: 9, colorPalette: ['#f0e2b7', '#c6b286', '#9e8c5b', '#a48b61', '#e3d090'] },
        { id: '10', imageUrl: '/images/AllRunwayImages/SchiaparelliLook10.png', look: 10, colorPalette: ['#f7d0a7', '#d4b295', '#b99e6e', '#c0b07e', '#d9c08f'] },
        { id: '11', imageUrl: '/images/AllRunwayImages/SchiaperelliLook11.png', look: 11, colorPalette: ['#f5e2c5', '#d8b799', '#b89a6c', '#b5a574', '#e2d19d'] },
        { id: '12', imageUrl: '/images/AllRunwayImages/SchiaperelliLook12.png', look: 12, colorPalette: ['#f3d1a5', '#d2b087', '#a78e5e', '#9c7b53', '#c8b297'] },
        { id: '13', imageUrl: '/images/AllRunwayImages/SchiaperelliLook13.png', look: 13, colorPalette: ['#f9c9a4', '#d8a77b', '#a87f5a', '#9e7b4e', '#d6c69b'] },
        { id: '14', imageUrl: '/images/AllRunwayImages/SchiaperelliLook14.png', look: 14, colorPalette: ['#f7d3a1', '#d7b28f', '#b59f6f', '#a88e5f', '#e3d28b'] },
        { id: '15', imageUrl: '/images/AllRunwayImages/SchiaparelliLook15.png', look: 15, colorPalette: ['#f1d5b7', '#d8b799', '#b89a6e', '#a58c53', '#e3d1a0'] },
        { id: '16', imageUrl: '/images/AllRunwayImages/SchiaparelliLook16.png', look: 16, colorPalette: ['#f5e2c0', '#d7b088', '#a67a5b', '#9e7452', '#e3d09e'] },
        { id: '17', imageUrl: '/images/AllRunwayImages/SchiaparelliLook17.png', look: 17, colorPalette: ['#f9e5b4', '#cdb89e', '#a9976d', '#a58c5a', '#e2d28e'] },
        { id: '18', imageUrl: '/images/AllRunwayImages/SchiaparelliLook18.png', look: 18, colorPalette: ['#f6d2a5', '#d7b78f', '#a78a66', '#9e7a55', '#e3d298'] },
        { id: '19', imageUrl: '/images/AllRunwayImages/SchiaparelliLook19.png', look: 19, colorPalette: ['#f5e2c5', '#d7b78f', '#a68e6d', '#9e7b59', '#d8c79b'] },
        { id: '20', imageUrl: '/images/AllRunwayImages/SchiaparelliLook20.png', look: 20, colorPalette: ['#f7d1a3', '#d8b68e', '#b89b6d', '#a87b52', '#e2d090'] },
        { id: '21', imageUrl: '/images/AllRunwayImages/SchiaparelliLook21.png', look: 21, colorPalette: ['#f1e2c5', '#d8b98f', '#a68b69', '#9e7a56', '#e3d090'] },
        { id: '22', imageUrl: '/images/AllRunwayImages/SchiaparelliLook22.png', look: 22, colorPalette: ['#f7c1a6', '#d7a77b', '#a88e61', '#9e7b51', '#e2c79f'] },
        { id: '23', imageUrl: '/images/AllRunwayImages/SchiaparelliLook23.png', look: 23, colorPalette: ['#f8e2c5', '#d1b47a', '#a78b61', '#9e7a55', '#e3d19e'] },
        { id: '24', imageUrl: '/images/AllRunwayImages/SchiaparelliLook24.png', look: 24, colorPalette: ['#f2d1a4', '#d7b78f', '#b78a5e', '#a68b5b', '#e1c79b'] },
        { id: '25', imageUrl: '/images/AllRunwayImages/SchiaparelliLook25.png', look: 25, colorPalette: ['#f4e2c5', '#d8b78f', '#a68c63', '#9e7a56', '#e2d08e'] },
        { id: '26', imageUrl: '/images/AllRunwayImages/SchiaparelliLook26.png', look: 26, colorPalette: ['#f5d1a3', '#d8b68f', '#b89a6c', '#a78c5b', '#e1c79f'] },
        { id: '27', imageUrl: '/images/AllRunwayImages/SchiaparelliLook27.png', look: 27, colorPalette: ['#f2e1c5', '#d7b88f', '#a78b63', '#9e7b55', '#e2c09b'] },
        { id: '28', imageUrl: '/images/AllRunwayImages/SchiaparelliLook28.png', look: 28, colorPalette: ['#f7d2a3', '#d8b78f', '#a68b61', '#a77b52', '#e3c79b'] },
        { id: '29', imageUrl: '/images/AllRunwayImages/SchiaparelliLook29.png', look: 29, colorPalette: ['#f1e5b4', '#d7b68f', '#a67a5f', '#9e7b56', '#e2c79a'] },
        { id: '30', imageUrl: '/images/AllRunwayImages/SchiaparelliLook30.png', look: 30, colorPalette: ['#f3d1a4', '#d8b98f', '#b78c6d', '#a58b5b', '#e2c79f'] },
        { id: '31', imageUrl: '/images/AllRunwayImages/SchiaparelliLook31.png', look: 31, colorPalette: ['#f9d1a5', '#d7b88f', '#a68a61', '#9e7b54', '#e3c69b'] },
        { id: '32', imageUrl: '/images/AllRunwayImages/SchiaparelliLook32.png', look: 32, colorPalette: ['#f2d0a7', '#d8b78f', '#a68c5f', '#a78b62', '#e2c79f'] },
        { id: '33', imageUrl: '/images/AllRunwayImages/SchiaparelliLook33.png', look: 33, colorPalette: ['#f5d3a1', '#d8b68f', '#a78d63', '#9e7a55', '#e2c79b'] }
    ]
    
    }
  ]
};

function DesignerGallery() {
  const { designer } = useParams();
  const shows = designerShows[designer?.toLowerCase() ?? ''] || [];
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);

  if (!designer || shows.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold text-red-500">Designer not found</h1>
        <p className="text-gray-600 mt-2">Please check the URL or select a valid designer.</p>
      </div>
    );
  }

  const allImages = shows.flatMap(show => show.images);
  const startIndex = (currentPage - 1) * imagesPerPage;
  const currentImages = allImages.slice(startIndex, startIndex + imagesPerPage);
  const totalPages = Math.ceil(allImages.length / imagesPerPage);

  return (
    <div className="min-h-screen bg-gray-50">
      {shows.map((show) => (
        <section key={show.id} className="max-w-7xl mx-auto px-4 py-12">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="flex items-center gap-4 mb-6">
              <Star className="w-8 h-8 text-yellow-500" />
              <h2 className="text-3xl font-bold">{show.name}</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {currentImages.map((image) => (
                <div
                  key={image.id}
                  onClick={() => setSelectedImageId(image.look.toString())}
                  className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105"
                >
                  <div className="relative aspect-[3/4]">
                    <img
                      src={image.imageUrl}
                      alt={`Look ${image.look}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Look {image.look}</h3>
                    <div className="flex items-center gap-2">
                      <Palette className="w-5 h-5 text-gray-400" />
                      <div className="flex gap-2">
                        {image.colorPalette.map((color, index) => (
                          <div key={index} className="w-8 h-8 rounded-full shadow-inner" style={{ backgroundColor: color }} title={color} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-between items-center mt-6">
              <button
                className="bg-gray-500 text-white py-2 px-4 rounded-md"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span className="text-lg">{currentPage} of {totalPages}</span>
              <button
                className="bg-gray-500 text-white py-2 px-4 rounded-md"
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </section>
      ))}

      {/* Modal Popup */}
      {selectedImageId && (
        <RunwayImageCard
          designer={designer}
          imageId={selectedImageId}
          onClose={() => setSelectedImageId(null)}
        />
      )}
    </div>
  );
}

export default DesignerGallery;