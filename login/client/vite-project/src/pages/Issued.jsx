import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import AdminNavBar from '../components/adminNavBar';
import './Issued.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
