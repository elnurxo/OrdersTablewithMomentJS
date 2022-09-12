fetch("https://northwind.vercel.app/api/orders")
.then(res => res.json())
.then(data => {
    fillTable(data);
})

const fillTable = (data) => {
let count = 0;  
document.getElementsByTagName('tbody')[0].innerHTML = "";

data.forEach(element => {
   if (moment(element.orderDate).day()==1) {
    var trElement = document.createElement('tr');
    
    count++;
    var trCount = document.createElement('th');
    trCount.setAttribute("scope","row");
    trCount.innerHTML = count;

    var tdNameElement= document.createElement('td');
    tdNameElement.innerHTML = element.shipName;

    var tdAddressElement = document.createElement('td');
    tdAddressElement.innerHTML = element.shipAddress.city+', '+element.shipAddress.country;

    var tdOrderDateElement = document.createElement('td');
    tdOrderDateElement.innerHTML = moment(element.orderDate).format('YYYY-MM-DD HH:mm');

    var tdOrderDate2Element = document.createElement('td');
    tdOrderDate2Element.innerHTML = moment(element.orderDate).add(1, 'M').format('MMMM Do YYYY');

    var tdOrderDate3Element = document.createElement('td');
    tdOrderDate3Element.innerHTML = moment(element.orderDate).add(1, 'w').format('MMMM Do YYYY');

    var tdOrderDate4Element = document.createElement('td');
    tdOrderDate4Element.innerHTML = moment(element.orderDate).subtract(10, 'd').format('MMMM Do YYYY');

    var tdOrderDate5Element = document.createElement('td');
    tdOrderDate5Element.innerHTML = moment.utc(element.orderDate).add(4,'h').locale("az").format('YYYY-MM-DD HH:mm');

    trElement.append(trCount,tdNameElement,tdAddressElement,tdOrderDateElement,tdOrderDate2Element,tdOrderDate3Element,tdOrderDate4Element,tdOrderDate5Element);
    document.getElementsByTagName('tbody')[0].appendChild(trElement);
   }
});
}

//Custom bir kolon ekle (OrderDate-5 ) Bu kolonda OrderDate Azerbaycan saat dilimine göre yazsın ((GMT+4)) Mevcut orderDate GMT-0 kabul edebilirsiniz.
