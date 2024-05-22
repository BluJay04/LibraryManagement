import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <div>
            <div  class="bg-body-tertiary d-flex justify-content-between  text-lg">

                <div class="" >
                    &nbsp;call us :<i class="ri-phone-fill"></i>+91 8609604239 &nbsp; visit our website
                    <i class="ri-global-fill"></i>
                    <Link to="/login">LibbY</Link>
                    &nbsp;
                    </div>
                    <div>
                    follow us <i class="ri-instagram-fill"></i> &nbsp;
                    <i class="ri-facebook-circle-fill"></i>
                    </div>
               
                <div class="text-end">
                    

                    <a>© 2020 Copyright:</a>
                </div>

            </div>
        </div>
    )
}

export default Footer