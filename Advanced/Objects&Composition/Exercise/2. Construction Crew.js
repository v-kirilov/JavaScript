function objDemo(worker) {
    
    if (worker.dizziness) {
        worker.levelOfHydrated +=0.1*worker.weight*worker.experience;

        worker.dizziness=false;
    }
    
   // console.log(worker);
    return worker;
}

objDemo({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}
)