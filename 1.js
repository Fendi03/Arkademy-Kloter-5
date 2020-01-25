function dataJSON(){
    const result = JSON.parse(
        '{"Name":"Fendi","Age":"18","Address":"Dukuh, RT 03, RW 06, Trangsan, Gatak, Sukoharjo, Jawa Tengah","Hobbies":"[Main Game, Ngoding, Menulis]","Is Married":"false","List School":"[{Name : SMK Negeri 6 Sukoharjo}, {Year In : 2016}, {Year Out : 2019}, {Major : Multimedia}]","Skills":"[{Graphic Design : Advanced}, {Writer : Beginner}]", "Interest in Coding":"True"}'
    );
    
    console.log(result.Name);
    console.log(result.Age);
    
    return result;
}

console.log(dataJSON());