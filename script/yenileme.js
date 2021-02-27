var yenilenmeSuresi = 1;
var date= new Date();
var sonTarih = localStorage.getItem("guncelleme");

if(sonTarih === null)
{ localStorage.setItem("guncelleme",date.getTime());
}
else
{
    if(date.getDate() - sonTarih >= yenilenmeSuresi*10000)
{
        localStorage.setItem("guncelleme",date.getDate());
window.location.reload(true);
}
}