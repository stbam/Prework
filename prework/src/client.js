import { createClient } from "@supabase/supabase-js";

const URL = "https://bektolghyhxxzdjkvhiq.supabase.co";
const API_KEY = "sb_publishable_xouOz9W6eA16jg2ljjhQSg_RFWQrPs5";

export const supabase = createClient(URL, API_KEY);
