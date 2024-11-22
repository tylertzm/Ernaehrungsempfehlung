// Food Recognition https://www.kaggle.com/code/bebofekry/101-food-classification AND https://www.kaggle.com/datasets/dansbecker/food-101
// https://bildagentur.panthermedia.net/suche/medien/?q=avocado potential source for food images 
// http://www.vegetarische-rezepte.com/vegetarischerezepte/auflauf/index.php zutaten, rezept, zubereitung
// https://shop.rewe.de/api/products/?search= rewe api search


const puppeteer = require('puppeteer');

async function scrapeWholePage() {
  const browser = await puppeteer.launch({ headless: true }); // Launch headless browser
  const page = await browser.newPage(); // Open a new page

  try {
    // Go to the URL you want to scrape
    const url = 'https://shop.rewe.de/api/products/?search=avocado'; // Replace with the URL of the page you want to scrape
    await page.goto(url, { waitUntil: 'networkidle2' }); // Wait for page to load

    // Capture the full HTML content of the page
    const fullHTML = await page.content(); // This gives you the full HTML of the page

    // Optionally, log the full HTML or save it to a file
    console.log(fullHTML);

    // You could also save the HTML to a file if needed
    const fs = require('fs');
    fs.writeFileSync('scrapedPage.html', fullHTML); // Save the HTML to a local file

  } catch (error) {
    console.error('Error scraping the page:', error.message);
  } finally {
    // Close the browser
    await browser.close();
  }
}

scrapeWholePage();

