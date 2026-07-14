/**
 * Copyright © 2025 Ashish. All rights reserved.
 * This source code is the property of Ashish and may not be reproduced, distributed, 
 * or transmitted in any form without explicit written permission.
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
