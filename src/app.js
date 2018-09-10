


const app = {
    ethAddressList :  []
}




const onFormSubmit = (e) => {
e.preventDefault();

const ethAddress = e.target.elements.ethAddress.value;
console.log(ethAddress)
if (ethAddress) {
    app.ethAddressList.push(ethAddress)
}
e.target.elements.ethAddress.value ='';
render();

}



const render = () => { 
const template = (
<div>
    <h1> My App Heading from src/app.js </h1>
    <div>
        <form onSubmit={onFormSubmit} >
            <p>Enter ETH Address</p>
            <input type="text" name="ethAddress"/>
            <button> Submit </button>
        </form>
    <div>
        <ol>
            {app.ethAddressList.map((ethAddress) => <li>Addr: {ethAddress} </li> )}
        </ol>
    </div>

    </div>
</div>

)

ReactDOM.render(template, document.getElementById('app'))
}

render();