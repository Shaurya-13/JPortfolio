const express = require('express')
const router = express.Router()
const ProjectController=require('../controllers/ProjectController')
router.get('/', (req, res)=>{
    const data= req.context
    const projectCtr=new ProjectController()
    projectCtr.get()
    .then(projects=>{
        data['projects']=projects
        res.render('landing',data)
    })
    .catch(err=>{
        res.send('Something went wrong - '+err.message)
    })
})
router.get('/project/:slug', (req, res)=>{
    const data=req.context
    const projectSlug=req.params.slug
    const projectCtr=new ProjectController()
    projectCtr.get({slug:projectSlug})
    .then(projects=>{
        if(projects.length==0){
            throw new Error('Project not found')
            return
        }
        const project=projects[0]
        data['project']=project
        res.render('project',data)
    })
    .catch(err=>{
        res.send('Something went wrong - '+err.message)
    })
}) 
module.exports = router