import supabaseClient from "@/utils/supabase";

export async function getJobs(token,{location, company_id, searchQuery}){
  const supabase = await supabaseClient(token)

  let query = supabase.from("jobs").select("*, company:companies(name,logo_url),saved:saved_jobs(id)")


  if(location){
    query = query.eq("location", location)
  }
  if(company_id){
    query = query.eq("company_id", company_id)
  }
  if(searchQuery){
    query = query.ilike("title", `%${searchQuery}%`)
  }


  const { data, error } = await query

  if (error){
    console.error("Error fetching jobs: ",error)
    return null
  }
  return data
}

export async function saveJob(token, { alreadySaved }, saveData) {
  const supabase = await supabaseClient(token)

  if(alreadySaved){
    const { data, error:deleteError } = await supabase.from("saved_jobs").delete().eq("job_id",saveData.job_id)

    if(deleteError) {
      console.log("Error Deleting Saved Job: ",deleteError);
      return null
      
    }
    return data
  }else{
    const { data, error:insertError } = await supabase.from("saved_jobs").insert([saveData]).select()

    if(insertError) {
      console.log("Error in inserting Jobs: ",insertError);
      return null
      
    }
    return data

  }
}

export async function getSingleJob(token, { job_id }) {
  const supabase = await supabaseClient(token);

  if (!job_id) {
    console.error("getSingleJob: job_id is missing");
    return null;
  }

  const { data, error } = await supabase
    .from("jobs")
    .select("*, company:companies(name, logo_url), applications:applications(*)")
    .eq("id", job_id)
    .single();

  if (error) {
    console.error("Error Fetching Job: ", error);
    return null;
  }
  return data;
}

export async function updateHiringStatus(token, { job_id }, isOpen) {
  const supabase = await supabaseClient(token);
  const { data, error } = await supabase
    .from("jobs")
    .update({ isOpen })
    .eq("id", job_id)
    .select();

  if (error) {
    console.error("Error Updating Hiring Status:", error);
    return null;
  }

  return data;
}

export async function addNewJob(token, _, jobData) {
  const supabase = await supabaseClient(token);

  const { data, error } = await supabase
    .from("jobs")
    .insert([jobData])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Error Creating Job");
  }

  return data;
}