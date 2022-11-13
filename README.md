<h1>Bsale-Store <img  src="https://res.cloudinary.com/dltjb3yhc/image/upload/v1663220828/banner/iconoBsale_mkkwpk.jpg"/></h1>

## Descripcion

Tienda online creada para completar un desafio. La tienda permite buscar productos, filtrandolos por nombre y categoria.
<br/>
<br/>

## Tecnologias Utilizadas

Para la realizacion de esta tienda virtual se utilizo vanilla js, HTML y CSS, adicionalmente la llamada a la informacion se realiza a traves de la peticion fetch, que trae la informacion del backend conectado a una base de datos en mysql que es otorgado en el desafío.
<br/>
<br/>

## Funcionabilidades

<li>Una barra de navegacion que recorre las categorias de los productos, mostrando los productos relacionados a dicha categoria al hacer click en una de las opciones. Adicionalmente se tiene un boton de inicio donde al darle click mostrara todos los productos de la tienda.</li>
<br/>
<img src="https://res.cloudinary.com/tawaynaskp/image/upload/v1668377626/Captura_desde_2022-11-13_17-09-23_ggiho2.png"/>

<br/>
<li> Un buscador que trae el producto desde la llamada a la api o trae los productos relacionados al nombre que se ponga desde la entrada.</li>

<br/>

<img src="https://res.cloudinary.com/tawaynaskp/image/upload/v1668377727/Captura_desde_2022-11-13_17-15-04_cn98i4.png"/>

<br/>
La tienda recibe los productos de la Api, trayendolos a traves de una funcion llamada "getAllProducts". Igualmete con el search bar la cual es ejecutada mediante el metodo addEventListener y escucha un "submit" , luego se extraen los datos del input y los productos se  terminan renderizando mediante el nombre que el usuario digite.

<br/>
<h2>Imagen de muestra:</h2>
<br/>
<img src="https://res.cloudinary.com/tawaynaskp/image/upload/v1668378199/Captura_desde_2022-11-13_17-23-08_c5ecg1.png"/>

<br/>
<h2>Ejecutar la tienda de manera local</h2>

Para poder ejecutar la tienda de manera local solo se necesita un servidor en vivo de preferencia tener instalada la extension "live Server" en caso de ser abierto el repositorio en VSC.

<h2>Produccion</h2>

Esta tienda fue deployada en vercel.

<li>Bsale-Store: <a href="https://frontend-bsale-fawn.vercel.app/">link</a></li>

<br/>
<h2>Portfolio</h2>
<ul>
<li><a href="https://portfolio-anderson-one.vercel.app/">About Me 😄</a></li>
</ul>
