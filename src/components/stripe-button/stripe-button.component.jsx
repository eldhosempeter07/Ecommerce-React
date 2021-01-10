import StripeCheckout from "react-stripe-checkout";


const StripCheckoutButton = ({price}) => {
    const priceForStripe = price *100;
    const publishableKey = 'pk_test_51I83pXJk8hLOLIqO7JFWXGFhKMvJ3oo3LBvYz8NV8fHtbxSI2qSgcHvMSe0kwxbVAYudMusoPtKEIA7ADxHjWlx400JGBApG1G' 
            
    const onToken = token =>{
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name = 'CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripCheckoutButton