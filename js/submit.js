import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";
import { SUPABASE_URL, SUPABASE_ANON_KEY, isSupabaseConfigured } from "./config.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("idea-form");
  const submitBtn = document.getElementById("submit-btn");
  const successNotice = document.getElementById("notice-success");
  const errorNotice = document.getElementById("notice-error");
  const configBanner = document.getElementById("config-banner");

  if (!form) return;

  // Show config banner if credentials are not yet added
  if (!isSupabaseConfigured() && configBanner) {
    configBanner.style.display = "block";
  }

  // Initialize Supabase client
  let supabase = null;
  if (isSupabaseConfigured()) {
    try {
      supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    } catch (err) {
      console.error("Failed to initialize Supabase client:", err);
    }
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Hide any previous messages
    if (successNotice) successNotice.style.display = "none";
    if (errorNotice) errorNotice.style.display = "none";

    const fullName = document.getElementById("full_name").value.trim();
    const age = parseInt(document.getElementById("age").value, 10);
    const projectTitle = document.getElementById("project_title").value.trim();
    const ideaDescription = document.getElementById("idea_description").value.trim();
    const fundingGoal = document.getElementById("funding_goal").value.trim();
    const email = document.getElementById("email").value.trim();

    // Basic validation
    if (!fullName || !projectTitle || !ideaDescription || !fundingGoal || !email) {
      showError("Please complete all required fields.");
      return;
    }

    if (isNaN(age) || age < 14 || age > 35) {
      showError("Please enter a valid age between 14 and 35.");
      return;
    }

    // Check if Supabase credentials are configured
    if (!isSupabaseConfigured() || !supabase) {
      showError(
        "Supabase credentials are not configured yet in js/config.js. Please update SUPABASE_URL and SUPABASE_ANON_KEY to save submissions to your database."
      );
      return;
    }

    // Set loading state
    submitBtn.disabled = true;
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = "Submitting...";

    try {
      const { data, error } = await supabase.from("ideas").insert([
        {
          full_name: fullName,
          age: age,
          project_title: projectTitle,
          idea_description: ideaDescription,
          funding_goal: fundingGoal,
          email: email
        }
      ]);

      if (error) {
        throw error;
      }

      // Success
      form.reset();
      if (successNotice) {
        successNotice.style.display = "block";
        successNotice.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    } catch (err) {
      console.error("Submission error:", err);
      showError(err.message || "Failed to submit. Please try again or reach out by email.");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;
    }
  });

  function showError(msg) {
    if (errorNotice) {
      errorNotice.textContent = msg;
      errorNotice.style.display = "block";
      errorNotice.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      alert(msg);
    }
  }
});
