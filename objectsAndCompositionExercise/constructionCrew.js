function constructionCrew(worker){
    if (worker.dizziness){
        worker.levelOfHydrated += 0.1*worker.weight*worker.experience
        worker.dizziness = false
    }
    console.log(worker)
}


constructionCrew({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }
  
  )