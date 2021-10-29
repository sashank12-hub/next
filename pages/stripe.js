// import { GetServerSideProps } from "next";
// import { loadStripe } from "@stripe/stripe-js";
// import Stripe from "stripe";
// import { createCheckoutSession } from "next-stripe/client";



// export default function Home({ prices }) {
//   const onClick = async (priceId) => {
//       console.log(priceId)
//     const session = await createCheckoutSession({
//       success_url: window.location.href,
//       cancel_url: window.location.href,
//       line_items: [{ price: priceId, quantity: 1 }],
//       payment_method_types: ["card"],
//       mode: "payment",
//     });
//     const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY,{
//         apiVersion:"2020-08-27"
//     });
//     console.log(stripe,"stroi")
//     if (stripe) {
//       stripe.redirectToCheckout({ sessionId: session.id });
//     }
//   };

//   return (
//     <div>
//       <h1>Programmer For Hire</h1>

//       <ul>
//         {prices.map((price) => (
//           <li key={price.id}>
//             <h2>{price.product.name}</h2>
//             <img src={price.product.images[0]} />
//             <p>Cost: ${((price.unit_amount) / 100).toFixed(2)}</p>
//             <button onClick={() => onClick(price.id)}>Buy</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export const getServerSideProps = async () => {
//   const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

//   const prices = await stripe.prices.list({
//     active: true,
//     limit: 10,
//     expand: ["data.product"],
//   });

//   return { props: { prices: prices.data } };
// };

// // import NextStripe from 'next-stripe'
// // export default NextStripe({
// //     stripe_key: process.env.STRIPE_SECRET_KEY
// // })
// // Creating Checkout Page
// // Create two pages in Next.js pages folder my-checkout.js and thank-you.js

// // import { createCheckoutSession } from 'next-stripe/client'
// // import { loadStripe } from "@stripe/stripe-js";


// // export default function MyCheckout() {

// //     const handleCheckout = async () => {
// //         const priceOne = 18;
// //         const session = await createCheckoutSession({
// //             success_url: window.location.origin + '/thank-you?session_id={CHECKOUT_SESSION_ID}',
// //             cancel_url: window.location.href,
// //             line_items: [
// //                 {
// //                     quantity: 1,
// //                     name : 'Beanie with Logo',
// //                     images: ['https://via.placeholder.com/150'],
// //                     amount: Math.round(priceOne * 100),
// //                     currency: 'usd',
// //                 },
// //             ],
// //             payment_method_types: ['card'],
// //             mode: 'payment'
// //         })

// //         try {
// //             const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
// //             if (stripe) {
// //                 stripe.redirectToCheckout({ sessionId: session.id });
// //             }
// //         } catch (error) {
// //             console.log( error );
// //         }
// //     }

// //     return <div>
// //         <button onClick={handleCheckout}>Checkout</button>
// //     </div>
// // }



import { createCheckoutSession } from 'next-stripe/client'
import { loadStripe } from "@stripe/stripe-js";


export default function MyCheckout() {

    const handleCheckout = async () => {
        const priceOne = 18;
        const session = await createCheckoutSession({
            success_url: window.location.origin + '/thank-you?session_id={CHECKOUT_SESSION_ID}',
            cancel_url: window.location.href,
            line_items: [
                {
                    quantity: 1,
                    name : 'Beanie with Logo',
                    images: ['https://via.placeholder.com/150'],
                    amount: Math.round(priceOne * 100),
                    currency: 'usd',
                },
            ],
            payment_method_types: ['card'],
            mode: 'payment'
        })

        try {
            const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
            if (stripe) {
                stripe.redirectToCheckout({ sessionId: session.id });
            }
        } catch (error) {
            console.log( error );
        }
    }

    return <div>
        <button onClick={handleCheckout}>Checkout</button>
    </div>
}