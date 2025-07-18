import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';

const Verify = () => {

    const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext)
    const [searchParams, setSearchParams] = useSearchParams()

    const success = searchParams.get('success')
    const orderId = searchParams.get('orderId')

    const verifyPayment = async () => {

    }

    return (
        <div>

        </div>
    )
}

export default Verify
