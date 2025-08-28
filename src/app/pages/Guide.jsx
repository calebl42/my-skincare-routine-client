import styles from './Guide.module.css';

function Guide() {
  return(
    <main>
      <ul>
        <li>
          <h3>Step 1. Remove Dirt and Excess Oil With a Cleanser</h3>
          <p className={styles['guide-p']}>
            Choosing the right facial cleanser is the first important step in this routine. Every morning and evening, cleanse with a foaming gel cleanser that contains essential ceramides to help maintain your skin's natural barrier, such as CeraVe Foaming Facial Cleanser. This gel-based foaming cleanser is an ideal way to cleanse and care for normal to oily skin.
          </p>
          <p className={styles['guide-p']}>
            For rough and bumpy skin: For rough and bumpy skin concerns, we recommend CeraVe Renewing SA Cleanser, a fragrance-free and non-comedogenic salicylic acid cleanser. Salicylic acid is a gentle, yet effective exfoliating acid that helps sweep away dead skin cells. This cleanser effectively removes dirt, oil, and sweat without leaving skin feeling stripped. Best of all, it's suitable for both face and body, making it an easy way to simplify any men's skincare regimen. To apply it, simply wet your face or body with lukewarm water and massage into your skin in a gentle, circular motion.
          </p>
        </li>
        <li>
          <h3>Step 2. Use a Targeted Serum</h3>
          <p className={styles['guide-p']}>
            Every skincare routine should include a targeted serum that offers simple, multifunctional benefits. CeraVe Skin Renewing Vitamin C Serum offers antioxidant benefits, and helps to visibly brighten your complexion and promote a more even skin tone.
          </p>
          <p className={styles['guide-p']}>
            For sensitive skin: For a hydrating alternative for sensitive skin, you can apply the CeraVe Hydrating Hyaluronic Acid Serum with MVE Delivery Technology at this point in your routine for a refreshing, gel-cream option with vitamin B5 to help soothe skin.
          </p>
        </li>
        <li>
          <h3>Step 3. Apply a Moisturizer With Sunscreen</h3>
          <p className={styles['guide-p']}>
            “Sunscreen is a vital part of protecting the skin against the sun,” according to board-certified dermatologist Dr. Sejal Shah. Therefore, a hydrating moisturizer with SPF is an important next step in this routine. “When choosing a sunscreen product, it's important to choose a product that is broad-spectrum with an SPF of at least 30,” says Dr. Sejal Shah, adding that, “broad-spectrum indicates that the sunscreen protects against both UVA and UVB, both of which are harmful to the skin.”
          </p>
        </li>
        <li>
          <h3>Step 4. Apply a Nighttime Moisturizer</h3>
          <p className={styles['guide-p']}>
            Applying a P.M. moisturizer is the final step in this routine for men. CeraVe recommends choosing a soothing night cream that is rich, yet lightweight, and suitable for most skin types. For normal skin: Look for a ceramide-infused moisturizer, such as CeraVe PM Facial Moisturizing Lotion, to help hydrate and soothe your skin while you sleep. This moisturizing lotion is non-comedogenic, so it won't clog pores or cause acne flare-ups, and contains beneficial ingredients—like hyaluronic acid and niacinamide—to deliver long-lasting moisture benefits throughout the night.
          </p>
        </li>
      </ul>
    </main>
  )
}

export default Guide;