import { useState } from 'react';


export default function CartPage(){
  const [sortedDir, setSortedDir] = useState<'asc' | 'dsc' | null>(null);
    return(
        <div>
            <h1 onClick={() => setSortedDir('asc')}>Cart Page</h1>
            {
              sortedDir &&
              (sortedDir === 'asc' ?
              <div onClick={() => setSortedDir('dsc')}>ASC</div>
              :
              <div onClick={() => setSortedDir('asc')}>DESC</div>)
            }
        </div>
    );
    //Check to see if cart is empty. If it is, load an the empty page content. Otherwise, load the regular page
    //This will reuse a lot of the same code from Purchase history. The only different is adding the ability to update qty and the ability to checkout
}