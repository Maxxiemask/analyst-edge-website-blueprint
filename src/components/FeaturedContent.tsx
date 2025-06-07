
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

        {/* Book 1: Free Starter Guide */}
        <div className="mb-12 animate-on-scroll">
          <Card className="border-2 border-green-200 bg-green-50/50 hover:shadow-lg transition-all duration-300 max-w-2xl mx-auto">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-fit">
                <Gift className="h-8 w-8 text-green-600" />
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-700 border-0 mb-2 w-fit mx-auto">
                FREE
              </Badge>
              <h3 className="text-xl font-bold text-navy mb-2 text-center">
                How to Start Your Career in Data Analysis
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                A beginner's guide to launching your data career with no degree or bootcamp.
              </p>
            </CardHeader>
            
            <CardContent className="text-center">
              <div className="space-y-2 mb-6 text-sm text-gray-600">
                <div>✔ Career paths</div>
                <div>✔ Tools roadmap</div>
                <div>✔ Project tips + practice</div>
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

        {/* Book 2: Excel for Analysts */}
        <div className="mb-12 animate-on-scroll">
          <Card className="border-2 border-green-300 bg-green-100/50 hover:shadow-lg transition-all duration-300 max-w-2xl mx-auto">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-3 bg-green-200 rounded-full w-fit">
                <FileSpreadsheet className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2 text-center">Excel for Analysts</h3>
              <p className="text-2xl font-bold text-green-700 mb-2">£7.99</p>
              <p className="text-gray-600 text-sm mb-4">
                Learn to clean, explore, and analyze data in Excel — beginner-friendly.
              </p>
            </CardHeader>
            
            <CardContent className="text-center">
              <div className="space-y-2 mb-6 text-sm text-gray-600">
                <div>✔ PivotTables, charts, formulas</div>
                <div>✔ Real data cleaning steps</div>
              </div>
              
              <Button 
                className="w-full bg-green-700 hover:bg-green-800 text-white flex items-center gap-2"
                asChild
              >
                <a href="https://dlahtalk.gumroad.com/l/xqdhfh" target="_blank" rel="noopener noreferrer">
                  <ShoppingCart size={16} />
                  Buy Now
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Book 3: Power BI Data Cleaning */}
        <div className="mb-12 animate-on-scroll">
          <Card className="border-2 border-green-300 bg-green-100/50 hover:shadow-lg transition-all duration-300 max-w-2xl mx-auto">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-3 bg-green-200 rounded-full w-fit">
                <Database className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2 text-center">Power BI – Data Cleaning & Relationships</h3>
              <p className="text-2xl font-bold text-green-700 mb-2">£7.99</p>
              <p className="text-gray-600 text-sm mb-4">
                Learn Power Query, table relationships, and DAX with a hands-on EV project.
              </p>
            </CardHeader>
            
            <CardContent className="text-center">
              <div className="space-y-2 mb-6 text-sm text-gray-600">
                <div>✔ Remove errors</div>
                <div>✔ Merge/split columns</div>
                <div>✔ Clean for dashboards</div>
              </div>
              
              <Button 
                className="w-full bg-green-700 hover:bg-green-800 text-white flex items-center gap-2"
                asChild
              >
                <a href="https://dlahtalk.gumroad.com/l/fobnh" target="_blank" rel="noopener noreferrer">
                  <ShoppingCart size={16} />
                  Buy Now
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Book 4: Power BI Dashboards */}
        <div className="mb-12 animate-on-scroll">
          <Card className="border-2 border-green-300 bg-green-100/50 hover:shadow-lg transition-all duration-300 max-w-2xl mx-auto">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-3 bg-green-200 rounded-full w-fit">
                <PieChart className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2 text-center">Power BI – Real-World Dashboards</h3>
              <p className="text-2xl font-bold text-green-700 mb-2">£9.99</p>
              <p className="text-gray-600 text-sm mb-4">
                Build real dashboards from scratch using business scenarios.
              </p>
            </CardHeader>
            
            <CardContent className="text-center">
              <div className="space-y-2 mb-6 text-sm text-gray-600">
                <div>✔ EV, Hospital & Retail datasets</div>
                <div>✔ Interactive elements like slicers</div>
              </div>
              
              <Button 
                className="w-full bg-green-700 hover:bg-green-800 text-white flex items-center gap-2"
                asChild
              >
                <a href="https://dlahtalk.gumroad.com/l/cmzrw" target="_blank" rel="noopener noreferrer">
                  <ShoppingCart size={16} />
                  Buy Now
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Book 5: SQL for Analysts */}
        <div className="mb-12 animate-on-scroll">
          <Card className="border-2 border-green-300 bg-green-100/50 hover:shadow-lg transition-all duration-300 max-w-2xl mx-auto">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-3 bg-green-200 rounded-full w-fit">
                <Database className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2 text-center">SQL for Analysts</h3>
              <p className="text-2xl font-bold text-green-700 mb-2">£9.99</p>
              <p className="text-gray-600 text-sm mb-4">
                Go from zero to dashboard-ready SQL.
              </p>
            </CardHeader>
            
            <CardContent className="text-center">
              <div className="space-y-2 mb-6 text-sm text-gray-600">
                <div>✔ SELECT, JOIN, GROUP</div>
                <div>✔ 3 real projects included</div>
              </div>
              
              <Button 
                className="w-full bg-green-700 hover:bg-green-800 text-white flex items-center gap-2"
                asChild
              >
                <a href="https://dlahtalk.gumroad.com/l/rycuf" target="_blank" rel="noopener noreferrer">
                  <ShoppingCart size={16} />
                  Buy Now
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Book 6: Python for Analysts */}
        <div className="mb-12 animate-on-scroll">
          <Card className="border-2 border-green-300 bg-green-100/50 hover:shadow-lg transition-all duration-300 max-w-2xl mx-auto">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-3 bg-green-200 rounded-full w-fit">
                <Code className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2 text-center">Python for Analysts</h3>
              <p className="text-2xl font-bold text-green-700 mb-2">£9.99</p>
              <p className="text-gray-600 text-sm mb-4">
                Start using Python for data analysis without the overwhelm.
              </p>
            </CardHeader>
            
            <CardContent className="text-center">
              <div className="space-y-2 mb-6 text-sm text-gray-600">
                <div>✔ Learn with Pandas, Matplotlib</div>
                <div>✔ Create real dashboards</div>
              </div>
              
              <Button 
                className="w-full bg-green-700 hover:bg-green-800 text-white flex items-center gap-2"
                asChild
              >
                <a href="https://dlahtalk.gumroad.com/l/jbjcdx" target="_blank" rel="noopener noreferrer">
                  <ShoppingCart size={16} />
                  Buy Now
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Book 7: Python + SQL Integration */}
        <div className="mb-12 animate-on-scroll">
          <Card className="border-2 border-green-300 bg-green-100/50 hover:shadow-lg transition-all duration-300 max-w-2xl mx-auto">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-3 bg-green-200 rounded-full w-fit">
                <Database className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2 text-center">Python + SQL Integration with Data Analysis</h3>
              <p className="text-2xl font-bold text-green-700 mb-2">£9.99</p>
              <p className="text-gray-600 text-sm mb-4">
                Combine Python and SQL for full end-to-end automation.
              </p>
            </CardHeader>
            
            <CardContent className="text-center">
              <div className="space-y-2 mb-6 text-sm text-gray-600">
                <div>✔ Store and clean data</div>
                <div>✔ Automate insights and visuals</div>
              </div>
              
              <Button 
                className="w-full bg-green-700 hover:bg-green-800 text-white flex items-center gap-2"
                asChild
              >
                <a href="https://dlahtalk.gumroad.com/l/ydxlj" target="_blank" rel="noopener noreferrer">
                  <ShoppingCart size={16} />
                  Buy Now
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Book 8: GitHub for Analysts */}
        <div className="mb-12 animate-on-scroll">
          <Card className="border-2 border-green-300 bg-green-100/50 hover:shadow-lg transition-all duration-300 max-w-2xl mx-auto">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-3 bg-green-200 rounded-full w-fit">
                <Github className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2 text-center">Introduction to GitHub for Data Analysts</h3>
              <p className="text-2xl font-bold text-green-700 mb-2">£5.99</p>
              <p className="text-gray-600 text-sm mb-4">
                Master version control and build a public-facing data portfolio.
              </p>
            </CardHeader>
            
            <CardContent className="text-center">
              <div className="space-y-2 mb-6 text-sm text-gray-600">
                <div>✔ Set up GitHub</div>
                <div>✔ Track projects professionally</div>
              </div>
              
              <Button 
                className="w-full bg-green-700 hover:bg-green-800 text-white flex items-center gap-2"
                asChild
              >
                <a href="https://dlahtalk.gumroad.com/l/bujkc" target="_blank" rel="noopener noreferrer">
                  <ShoppingCart size={16} />
                  Buy Now
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Power BI Bundle */}
        <div className="mb-12 animate-on-scroll">
          <Card className="border-2 border-green-400 bg-green-200/50 hover:shadow-lg transition-all duration-300 max-w-2xl mx-auto">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-3 bg-green-300 rounded-full w-fit">
                <Package className="h-8 w-8 text-green-800" />
              </div>
              <Badge variant="secondary" className="bg-green-300 text-green-800 border-0 mb-2 w-fit mx-auto">
                BUNDLE DEAL
              </Badge>
              <h3 className="text-xl font-bold text-navy mb-2 text-center">Power BI eBook Bundle</h3>
              <p className="text-2xl font-bold text-green-800 mb-2">£10.99</p>
              <p className="text-gray-600 text-sm mb-4">
                Get both Power BI books together and save.
              </p>
            </CardHeader>
            
            <CardContent className="text-center">
              <div className="space-y-2 mb-6 text-sm text-gray-600">
                <div>✔ Book 3: Data Cleaning & Relationships</div>
                <div>✔ Book 4: Real-World Dashboards</div>
              </div>
              
              <Button 
                className="w-full bg-green-800 hover:bg-green-900 text-white flex items-center gap-2"
                asChild
              >
                <a href="https://dlahtalk.gumroad.com/l/wfcmn" target="_blank" rel="noopener noreferrer">
                  <ShoppingCart size={16} />
                  Buy Bundle
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Ultimate Bundle */}
        <div className="mb-16 animate-on-scroll">
          <Card className="border-4 border-green-500 bg-green-200/50 hover:shadow-xl transition-all duration-300 max-w-3xl mx-auto">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-4 bg-green-400 rounded-full w-fit">
                <BookOpen className="h-10 w-10 text-green-900" />
              </div>
              <Badge variant="secondary" className="bg-green-400 text-green-900 border-0 mb-2 w-fit mx-auto text-base px-4 py-1">
                BEST VALUE - SAVE 60%+
              </Badge>
              <h3 className="text-2xl font-bold text-navy mb-2 text-center">Data Analyst Starter Kit (Full Bundle)</h3>
              <p className="text-3xl font-bold text-green-900 mb-2">£19.99</p>
              <p className="text-gray-600 mb-4">
                Includes 6 essential eBooks + 1 free starter guide.
              </p>
            </CardHeader>
            
            <CardContent className="text-center">
              <div className="grid md:grid-cols-2 gap-2 mb-6 text-sm text-gray-700">
                <div>✅ Python for Analysts</div>
                <div>✅ SQL for Analysts</div>
                <div>✅ Power BI Dashboards</div>
                <div>✅ Power BI Cleaning</div>
                <div>✅ Excel for Analysis</div>
                <div>✅ Python + SQL Integration</div>
                <div className="md:col-span-2">🎁 Bonus: Career Starter Guide</div>
              </div>
              
              <Button 
                size="lg"
                className="w-full bg-green-800 hover:bg-green-900 text-white flex items-center gap-2 text-lg py-6"
                asChild
              >
                <a href="https://dlahtalk.gumroad.com/l/vmkvtb" target="_blank" rel="noopener noreferrer">
                  <ShoppingCart size={20} />
                  Buy Full Bundle
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
