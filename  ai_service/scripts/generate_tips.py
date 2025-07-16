# ai_service/scripts/generate_tips.py

def generate_tips(business_data: dict) -> list:
    """
    Generates personalized business growth suggestions based on business attributes.

    Parameters:
        business_data (dict): Includes
            - business_type (str)
            - funding (float)
            - location (str)
            - years_operating (int, optional)

    Returns:
        List[str]: Tailored growth tips
    """

    tips = []
    b_type = business_data.get("business_type", "").lower()
    funding = float(business_data.get("funding", 0))
    location = business_data.get("location", "").lower()
    years = int(business_data.get("years_operating", 0))

    # General growth advice
    tips.append("📊 Regularly track key performance indicators (KPIs) to measure success.")
    tips.append("💬 Build strong customer relationships through feedback and support channels.")

    # Funding-related tips
    if funding < 10000:
        tips.append("💡 Consider applying for micro-loans or early-stage funding from local incubators.")
        tips.append("🧠 Focus on lean startup principles—maximize impact with minimum viable resources.")
    elif funding >= 10000 and funding <= 50000:
        tips.append("📢 Allocate part of your budget to digital marketing—target your niche audience.")
        tips.append("🛠️ Invest in tools and software that automate repetitive tasks.")
    else:
        tips.append("🌍 Expand your business into neighboring regions through franchises or partnerships.")
        tips.append("👥 Consider hiring specialists in operations or marketing to accelerate growth.")

    # Industry-specific suggestions
    if "tech" in b_type:
        tips.append("🤖 Use AI tools for automating customer service and predictive analytics.")
        tips.append("📱 Ensure your product is mobile-first and scalable across platforms.")
    elif "retail" in b_type:
        tips.append("🏪 Use footfall heatmaps and customer demographics to optimize store layout.")
        tips.append("📦 Explore omnichannel strategies—sell online and offline together.")
    elif "finance" in b_type:
        tips.append("🔐 Focus on cybersecurity and compliance to build customer trust.")
        tips.append("📈 Offer value-added services like automated budgeting or investment tools.")
    elif "health" in b_type:
        tips.append("🧬 Collaborate with medical professionals to ensure compliance and innovation.")
        tips.append("📅 Provide easy online booking and telehealth options.")
    elif "education" in b_type:
        tips.append("🎓 Build partnerships with schools or ed-tech influencers.")
        tips.append("📺 Offer short-form video lessons to boost engagement.")

    # Time in operation
    if years < 2:
        tips.append("🚀 Focus on branding and building an online presence in your early stage.")
    else:
        tips.append("📢 Consider hosting events, webinars, or workshops to strengthen brand authority.")

    return tips
