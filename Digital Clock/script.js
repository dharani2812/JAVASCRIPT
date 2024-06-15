function time(){
     const date=new Date();
     let hour=date.getHours()
     const meridian=hour>=12?"PM":"AM";
     hour=hour % 12 || 12
     hour=hour.toString().padStart(2,0);
     const minute=date.getMinutes().toString().padStart(2,0);
     const second=date.getSeconds().toString().padStart(2,0);
     const timestring=`${hour}:${minute}:${second}  ${meridian}`
     document.getElementById("clock").textContent=timestring


}
time();
setInterval(time,1000)