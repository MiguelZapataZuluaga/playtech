import { test, expect } from '@playwright/test';
const { Gopage} = require('./Go'); 

test('Probar funcion de Gopage', async ({ page }) => {
    await Gopage();
  });