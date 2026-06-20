# Agro E-Market 🌾🛒

Agro E-Market is a premium, full-stack farm-to-home e-commerce portal designed to bridge the gap between rural growers and urban consumers. By eliminating intermediaries, the platform enables direct sourcing of fresh fruits and vegetables at wholesale-like rates with fast, express delivery across India.

The application features a modern, responsive, SaaS-style landing page design complete with micro-interactions, floating badges, and high-fidelity custom typography.

---

## 🌟 Key Features

### 🛒 Dynamic E-Marketplace
- Browse a comprehensive grid of 40+ fresh produce items (fruits, vegetables, greens) complete with high-quality visual cards.
- Add items to an interactive shopping cart that calculates totals in real time.

### 💳 Complete Checkout Wizard Flow
1. **Flexible Payments selection**: Choose between paying online by scanning a dynamically rendered Google Pay/UPI QR code (`achaiyanachaiyan-2@okhdfcbank`) or selecting Cash on Delivery (COD).
2. **Delivery Information Form**: Enter shipping coordinates, contact phone, WhatsApp number, and landmarks.
3. **Dynamic Invoice Builder**: Generates a professional bill detailing invoice number, timestamps, breakdown of rates, quantities, and totals.
4. **PDF Invoice Downloads**: Convert and download order bills locally into a clean PDF format using `html2pdf.js`.
5. **WhatsApp Invoice Sharing**: Pre-fill order confirmation messages and direct users to share invoices with a single tap.

### 🚚 Sleek Order Tracker
- View a stepper tracking timeline representing delivery milestones: `Order Confirmed` ➔ `Packed` ➔ `In Transit` (with pulsing animations) ➔ `Delivered`.
- Displays dynamic estimated delivery dates (+3 days from purchase) and delivery location.

---

## 🛠️ Technology Stack

- **Backend**: Python with the Flask web framework.
- **Frontend**: HTML5, HSL-tailored CSS3, and ES6+ JavaScript.
- **Styling**: Bootstrap 5 + custom CSS transitions/animations for a professional SaaS feel.
- **Icons**: Font Awesome 6.
- **PDF Generation**: client-side `html2pdf.js`.

---

## 🚀 Setup and Installation

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/agro-e-market.git
cd agro-e-market/Agro_Medknow_Nexux-main
```

### 2. Configure Virtual Environment
It is highly recommended to use a virtual environment to manage project packages:
```bash
# Windows
python -m venv venv
venv\Scripts\activate

# macOS/Linux
python3 -m venv venv
source venv/bin/activate
```

### 3. Install Dependencies
Install all required Python modules:
```bash
python -m pip install -r requirements.txt
```

### 4. Run the Application
Start the local development server:
```bash
python app.py
```
Your application will be live at: [http://127.0.0.1:5000/](http://127.0.0.1:5000/)