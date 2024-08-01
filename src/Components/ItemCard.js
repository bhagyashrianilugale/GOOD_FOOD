import { addItem, increaseCount, decreaseCount }  from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { BsRecordCircle } from "react-icons/bs";
import { IoCaretUpCircleOutline } from "react-icons/io5";
import { DEFAULT_RESTAURANT_IMG } from "../utils/constant";
import { toast } from "react-toastify";

const CDN_URL = process.env.REACT_APP_CDN_URL;

const ItemCard =({ item, restaurants }) =>{
  
  const { items  } = useSelector((store)=>( store.cart));
  const dispatch = useDispatch();

    const handleCount= (e, item) => { 
         if(e.target.innerText == "ADD"){
                               dispatch(addItem({ item: [item, 1], restaurant: restaurants }));
                               toast.success("Your delicious item added to cart!",{
                                   onClose: 1500,
                                   position: "top-center"
                               });
                               
         }if(e.target.innerText == "+"){
                              const id = item?.card?.info?.id;
                              dispatch(increaseCount(id));
                              toast.success("Your delicious item added to cart!");

         }else if(e.target.innerText == "-"){
                               const id = item?.card?.info?.id;
                               dispatch(decreaseCount(id));
                               toast.warning("Item removed!");
         }
    }

return(
        <>
            <div className="p-2 m-2 border-grey-200 border-b-2 text-left flex justify-between">
                        <div className="w-9/12">
                                 <div className="py-2 font-medium">
                                           <span>
                                             {item?.card?.info?.itemAttribute?.vegClassifier == 'VEG' 
                                                    ? <BsRecordCircle className="text-green-700 inline text-center m-1"/> 
                                                    : <IoCaretUpCircleOutline  className=" text-red-700 inline text-center m-1" />
                                             }
                                             <p className="trucate inline">{ item?.card.info.name }</p>
                                           </span>
                                             <br/> 
                                             <div className="mx-5">&#8377;{ item?.card.info.price  
                                                ? (item?.card.info.price)/100 
                                                : (item?.card.info.defaultPrice)/100 }
                                             </div>
                                        </div>
                                          <p className="text-sm px-4 truncate">{ item?.card.info.description }</p>
                                 </div>
                                 <div className="w-3/12 rounded-lg">
                                           <img src={ item?.card?.info?.imageId?.length ? CDN_URL + item?.card?.info?.imageId : DEFAULT_RESTAURANT_IMG } 
                                                className="rounded-lg lg:w-full my-4 w-[100%] lg:h-40 h-40 lg:my-12 shadow-lg -top-1 shadow-zinc-400 relative" 
                                                alt="item_card_img"/> 
                                                <div className="p-2 bg-white mx-2 lg:mx-12 w-[18%] lg:w-[6%] h-10 lg:-mt-16 -mt-10 absolute
                                                           text-green-600  rounded-2xl  shadow-lg shadow-zinc-500">
                                                {items?.filter(
                                                   (itm) => (itm[0]?.card?.info?.id == item?.card?.info?.id)
                                                       ).length == 0
                                                        ? <button className="mx-2 lg:mx-6 font-medium" onClick = {(e)=> handleCount(e, item) } >ADD</button>
                                                        :  ( <div>
                                                               <button className="mx-auto lg:mx-2 font-bold text-xl" onClick = {(e)=> handleCount(e, item) }>-</button>
                                                                {items.map((itm, index)=>(itm[0]?.card?.info?.id == item?.card?.info?.id 
                                                                                         ?<span key={ index } className="mx-auto p-2 lg:p-0 lg:mx-2 font-semibold  text-xl">{itm[1]}</span>
                                                                                         : null)
                                                                                   
                                                                )}
                                                               <button className="mx-auto lg:mx-2 font-bold text-xl" onClick={(e)=> handleCount(e, item) }>+</button>
                                                             </div>
                                                          )
                                                    }
                                    </div>

                          </div>
                </div>
          </>
    )
};

export default ItemCard;