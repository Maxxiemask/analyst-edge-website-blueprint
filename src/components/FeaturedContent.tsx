
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, ShoppingCart, FileSpreadsheet, Gift, Database, PieChart, Code, Github, BookOpen, Package } from "lucide-react";

const FeaturedContent = () => {
  return (
    <section id="featured" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 animate-on-scroll">
            Complete Data Analysis Learning Path
          </h2>
          <p className="text-lg text-charcoal/80 animate-on-scroll">
            Start with our free guide, then build your skills step-by-step with affordable, practical resources.
          </p>
        </div>

        {/* Start Here Section */}
        <div className="mb-16 animate-on-scroll">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-2xl">👩‍💻</span>
            <h3 className="text-2xl font-bold text-navy">Start Here: Your First Step Into Data</h3>
          </div>
          
          <Card className="border-2 border-green-200 bg-green-50/50 hover:shadow-lg transition-all duration-300 max-w-2xl mx-auto">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-fit">
                <Gift className="h-8 w-8 text-green-600" />
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-700 border-0 mb-2 w-fit mx-auto">
                100% FREE
              </Badge>
              <h4 className="text-xl font-bold text-navy mb-2">
                How to Start Your Career in Data Analysis
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Curious about data but unsure where to begin? This free beginner guide gives you a realistic roadmap — no degree or bootcamp needed.
              </p>
            </CardHeader>
            
            <CardContent className="text-center">
              <div className="space-y-2 mb-6 text-sm text-gray-600">
                <div>✔ Understand what analysts do</div>
                <div>✔ Learn tools like Power BI, SQL, Python</div>
                <div>✔ Step-by-step practice roadmap</div>
                <div>✔ Tips for building your first portfolio</div>
              </div>
              
              <Button 
                className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center gap-2"
                asChild
              >
                <a href="https://dlahtalk.gumroad.com/l/yclpyi" target="_blank" rel="noopener noreferrer">
                  <Download size={16} />
                  Download Free Guide
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Excel Section */}
        <div className="mb-16 animate-on-scroll">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-2xl">📊</span>
            <h3 className="text-2xl font-bold text-navy">Excel for Beginners</h3>
          </div>
          
          <Card className="border-2 border-green-300 bg-green-100/50 hover:shadow-lg transition-all duration-300 max-w-2xl mx-auto">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-3 bg-green-200 rounded-full w-fit">
                <FileSpreadsheet className="h-8 w-8 text-green-700" />
              </div>
              <h4 className="text-xl font-bold text-navy mb-2">Excel for Analysts</h4>
              <p className="text-gray-600 text-sm mb-4">
                Perfect for beginners who want to clean, explore, and analyze data using Excel.
              </p>
            </CardHeader>
            
            <CardContent className="text-center">
              <div className="space-y-2 mb-6 text-sm text-gray-600">
                <div>✔ Clean & format messy data</div>
                <div>✔ PivotTables for fast insights</div>
                <div>✔ Charts that actually make sense</div>
                <div>✔ Time-saving formulas & shortcuts</div>
              </div>
              
              <div className="text-2xl font-bold text-green-700 mb-4">£5.99</div>
              
              <Button 
                className="w-full bg-green-700 hover:bg-green-800 text-white flex items-center gap-2"
                asChild
              >
                <a href="https://dlahtalk.gumroad.com/l/xqdhfh" target="_blank" rel="noopener noreferrer">
                  <ShoppingCart size={16} />
                  Buy Now – £5.99
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Power BI Series */}
        <div className="mb-16 animate-on-scroll">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-2xl">📈</span>
            <h3 className="text-2xl font-bold text-navy">Power BI Series</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-2 border-green-300 bg-green-100/50 hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-green-200 rounded-full w-fit">
                  <Database className="h-8 w-8 text-green-700" />
                </div>
                <h4 className="text-lg font-bold text-navy mb-2">Power BI – Data Cleaning & Relationships</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Learn how to use Power Query & DAX to clean and connect your data.
                </p>
              </CardHeader>
              
              <CardContent className="text-center">
                <div className="space-y-2 mb-6 text-sm text-gray-600">
                  <div>✔ Remove errors & blank rows</div>
                  <div>✔ Merge/split columns</div>
                  <div>✔ Set up professional data relationships</div>
                  <div>✔ Hands-on EV charging project</div>
                </div>
                
                <div className="text-xl font-bold text-green-700 mb-4">£7.99</div>
                
                <Button 
                  className="w-full bg-green-700 hover:bg-green-800 text-white flex items-center gap-2"
                  asChild
                >
                  <a href="https://dlahtalk.gumroad.com/l/fobnh" target="_blank" rel="noopener noreferrer">
                    <ShoppingCart size={16} />
                    Buy Now – £7.99
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-300 bg-green-100/50 hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-green-200 rounded-full w-fit">
                  <PieChart className="h-8 w-8 text-green-700" />
                </div>
                <h4 className="text-lg font-bold text-navy mb-2">Power BI – Real-World Dashboards</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Build business dashboards that make an impact.
                </p>
              </CardHeader>
              
              <CardContent className="text-center">
                <div className="space-y-2 mb-6 text-sm text-gray-600">
                  <div>✔ Dashboards for EV, Hospitals, & Retail</div>
                  <div>✔ Dynamic slicers, drill-throughs</div>
                  <div>✔ Data storytelling with visuals</div>
                  <div>✔ Practice with real Kaggle datasets</div>
                </div>
                
                <div className="text-xl font-bold text-green-700 mb-4">£9.99</div>
                
                <Button 
                  className="w-full bg-green-700 hover:bg-green-800 text-white flex items-center gap-2"
                  asChild
                >
                  <a href="https://dlahtalk.gumroad.com/l/cmzrw" target="_blank" rel="noopener noreferrer">
                    <ShoppingCart size={16} />
                    Buy Now – £9.99
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Power BI Bundle */}
          <Card className="border-2 border-green-400 bg-green-200/50 hover:shadow-lg transition-all duration-300 max-w-2xl mx-auto">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-3 bg-green-300 rounded-full w-fit">
                <Package className="h-8 w-8 text-green-800" />
              </div>
              <Badge variant="secondary" className="bg-green-300 text-green-800 border-0 mb-2 w-fit mx-auto">
                💥 BUNDLE DEAL
              </Badge>
              <h4 className="text-xl font-bold text-navy mb-2">Power BI Bundle</h4>
              <p className="text-gray-600 text-sm mb-4">
                Get both Power BI books (normally £17.98) for just £10.99
              </p>
            </CardHeader>
            
            <CardContent className="text-center">
              <div className="space-y-2 mb-6 text-sm text-gray-600">
                <div>✅ Data Cleaning & Relationships</div>
                <div>✅ Real-World Dashboards</div>
              </div>
              
              <div className="text-2xl font-bold text-green-800 mb-4">£10.99</div>
              
              <Button 
                className="w-full bg-green-800 hover:bg-green-900 text-white flex items-center gap-2"
                asChild
              >
                <a href="https://dlahtalk.gumroad.com/l/wfcmn" target="_blank" rel="noopener noreferrer">
                  <ShoppingCart size={16} />
                  Buy Bundle – £10.99
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* SQL Section */}
        <div className="mb-16 animate-on-scroll">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-2xl">🧠</span>
            <h3 className="text-2xl font-bold text-navy">Learn SQL from Scratch</h3>
          </div>
          
          <Card className="border-2 border-green-300 bg-green-100/50 hover:shadow-lg transition-all duration-300 max-w-2xl mx-auto">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-3 bg-green-200 rounded-full w-fit">
                <Database className="h-8 w-8 text-green-700" />
              </div>
              <h4 className="text-xl font-bold text-navy mb-2">SQL for Analysts</h4>
              <p className="text-gray-600 text-sm mb-4">
                A practical, beginner-friendly SQL guide with real project examples.
              </p>
            </CardHeader>
            
            <CardContent className="text-center">
              <div className="space-y-2 mb-6 text-sm text-gray-600">
                <div>✔ SELECT, JOIN, GROUP, CLEAN data</div>
                <div>✔ Build small dashboards</div>
                <div>✔ 3 Projects: Sales, Hospitals, Websites</div>
                <div>✔ Use MySQL or browser-based tools</div>
              </div>
              
              <div className="text-2xl font-bold text-green-700 mb-4">£6.99</div>
              
              <Button 
                className="w-full bg-green-700 hover:bg-green-800 text-white flex items-center gap-2"
                asChild
              >
                <a href="https://dlahtalk.gumroad.com/l/rycuf" target="_blank" rel="noopener noreferrer">
                  <ShoppingCart size={16} />
                  Buy Now – £6.99
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Python Section */}
        <div className="mb-16 animate-on-scroll">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-2xl">🐍</span>
            <h3 className="text-2xl font-bold text-navy">Python for Data Analysis</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-green-300 bg-green-100/50 hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-green-200 rounded-full w-fit">
                  <Code className="h-8 w-8 text-green-700" />
                </div>
                <h4 className="text-lg font-bold text-navy mb-2">Python for Analysts</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Learn Python, Pandas, and Matplotlib without overwhelm.
                </p>
              </CardHeader>
              
              <CardContent className="text-center">
                <div className="space-y-2 mb-6 text-sm text-gray-600">
                  <div>✔ Install Python the easy way</div>
                  <div>✔ Practice loops, lists, functions</div>
                  <div>✔ Clean data using Pandas</div>
                  <div>✔ Build charts & dashboards</div>
                  <div>✔ Bonus: Combine SQL + Python</div>
                </div>
                
                <div className="text-xl font-bold text-green-700 mb-4">£6.99</div>
                
                <Button 
                  className="w-full bg-green-700 hover:bg-green-800 text-white flex items-center gap-2"
                  asChild
                >
                  <a href="https://dlahtalk.gumroad.com/l/jbjcdx" target="_blank" rel="noopener noreferrer">
                    <ShoppingCart size={16} />
                    Buy Now – £6.99
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-300 bg-green-100/50 hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-green-200 rounded-full w-fit">
                  <Database className="h-8 w-8 text-green-700" />
                </div>
                <h4 className="text-lg font-bold text-navy mb-2">Python + SQL: Integration Projects</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Go full-stack and integrate your analysis.
                </p>
              </CardHeader>
              
              <CardContent className="text-center">
                <div className="space-y-2 mb-6 text-sm text-gray-600">
                  <div>✔ Store and retrieve data with SQL</div>
                  <div>✔ Clean and transform in Python</div>
                  <div>✔ Build visualizations</div>
                  <div>✔ Automate analysis end-to-end</div>
                </div>
                
                <div className="text-xl font-bold text-green-700 mb-4">£6.99</div>
                
                <Button 
                  className="w-full bg-green-700 hover:bg-green-800 text-white flex items-center gap-2"
                  asChild
                >
                  <a href="https://dlahtalk.gumroad.com/l/ydxlj" target="_blank" rel="noopener noreferrer">
                    <ShoppingCart size={16} />
                    Buy Now – £6.99
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* GitHub Section */}
        <div className="mb-16 animate-on-scroll">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-2xl">🌐</span>
            <h3 className="text-2xl font-bold text-navy">Bonus: GitHub for Analysts</h3>
          </div>
          
          <Card className="border-2 border-green-300 bg-green-100/50 hover:shadow-lg transition-all duration-300 max-w-2xl mx-auto">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-3 bg-green-200 rounded-full w-fit">
                <Github className="h-8 w-8 text-green-700" />
              </div>
              <h4 className="text-xl font-bold text-navy mb-2">Intro to Git & GitHub for Analysts</h4>
              <p className="text-gray-600 text-sm mb-4">
                Use GitHub to manage your portfolio and version your projects.
              </p>
            </CardHeader>
            
            <CardContent className="text-center">
              <div className="space-y-2 mb-6 text-sm text-gray-600">
                <div>✔ Set up GitHub & repos</div>
                <div>✔ Understand Git commands</div>
                <div>✔ Push/pull/update confidently</div>
                <div>✔ Build a professional data portfolio</div>
              </div>
              
              <div className="text-2xl font-bold text-green-700 mb-4">£4.99</div>
              
              <Button 
                className="w-full bg-green-700 hover:bg-green-800 text-white flex items-center gap-2"
                asChild
              >
                <a href="https://dlahtalk.gumroad.com/l/bujkc" target="_blank" rel="noopener noreferrer">
                  <ShoppingCart size={16} />
                  Buy Now – £4.99
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Ultimate Bundle */}
        <div className="mb-16 animate-on-scroll">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-2xl">🎓</span>
            <h3 className="text-2xl font-bold text-navy">Ultimate Value: Complete Data Analyst Starter Kit</h3>
          </div>
          
          <Card className="border-4 border-green-500 bg-green-200/50 hover:shadow-xl transition-all duration-300 max-w-3xl mx-auto">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-4 bg-green-400 rounded-full w-fit">
                <BookOpen className="h-10 w-10 text-green-900" />
              </div>
              <Badge variant="secondary" className="bg-green-400 text-green-900 border-0 mb-2 w-fit mx-auto text-base px-4 py-1">
                📦 BEST VALUE - SAVE 60%+
              </Badge>
              <h4 className="text-2xl font-bold text-navy mb-2">The Self-Taught Data Analyst Bundle</h4>
              <p className="text-gray-600 mb-4">
                Learn everything from scratch and save 60%+
              </p>
            </CardHeader>
            
            <CardContent className="text-center">
              <div className="grid md:grid-cols-2 gap-2 mb-6 text-sm text-gray-700">
                <div>✅ Excel for Analysis</div>
                <div>✅ Python for Analysts</div>
                <div>✅ SQL for Analysts</div>
                <div>✅ Python + SQL Integration</div>
                <div>✅ Power BI Dashboards</div>
                <div>✅ Power BI Cleaning</div>
                <div className="md:col-span-2">🎁 Bonus: Career Starter Guide (Free)</div>
              </div>
              
              <div className="text-3xl font-bold text-green-900 mb-6">£19.99</div>
              
              <Button 
                size="lg"
                className="w-full bg-green-800 hover:bg-green-900 text-white flex items-center gap-2 text-lg py-6"
                asChild
              >
                <a href="https://dlahtalk.gumroad.com/l/vmkvtb" target="_blank" rel="noopener noreferrer">
                  <ShoppingCart size={20} />
                  Buy Full Bundle – £19.99
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default FeaturedContent;
