export default function useGetTokenInCookies(name: string) {
    let cookiesArr = document.cookie.split(";");
     for(var i = 0; i < cookiesArr.length; i++) {
        var cookiePair = cookiesArr[i].split("=");
        if(name == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}

/* Fonction qui récupère un cookie spécifique selon param */