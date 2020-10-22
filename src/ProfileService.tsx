import {Petinfo} from './Interface';

async function fetchProfileInfo(): Promise<Petinfo>{
    const res = await fetch('http://localhost:3000/petinfo/5f817068327a81094416d049');
    const name = await res.json();
    return name;
}

async function fetchadoption(): Promise<Petinfo>{
    const res = await fetch('http://localhost:3000/petinfo/5f817068327a81094416d049');
    const name = await res.json();
    return name;
//ต้องการ รูป, idหมา, ชื่อหมา
}
async function fetchregister(): Promise<Petinfo>{
    const res = await fetch('http://localhost:3000/petinfo/5f817068327a81094416d049');
    const name = await res.json();
    return name;
//ต้องการ รูป, idหมา, ชื่อหมา
}
async function fetchadonation(): Promise<Petinfo>{
    const res = await fetch('http://localhost:3000/petinfo/5f817068327a81094416d049');
    const name = await res.json();
    return name;
//ต้องการ รูป, idหมา, ชื่อหมา
}

async function updateinfo(newInfoProfile:Petinfo): Promise<any|null> {
    const res = await fetch('http://localhost:3000/petinfo/5f817068327a81094416d049',{
        method: 'PATCH',//PUT POST
        headers : {'Content-Type': 'application/json'},
        body: JSON.stringify(newInfoProfile),
    });
}
async function updatedescription(newDescription:Petinfo): Promise<any|null> {
    const res = await fetch('http://localhost:3000/petinfo/5f817068327a81094416d049',{
        method: 'PATCH',
        headers : {'Content-Type': 'application/json'},
        body: JSON.stringify(newDescription),
    });
}
async function updateemail(newEmail:Petinfo): Promise<any|null> {
    const res = await fetch('http://localhost:3000/petinfo/5f817068327a81094416d049',{
        method: 'PATCH',
        headers : {'Content-Type': 'application/json'},
        body: JSON.stringify(newEmail),
    });
}

export default {
    fetchProfileInfo,
    fetchadoption,
    fetchregister,
    fetchadonation,
    updateinfo,
    updatedescription,
    updateemail,
} 

