using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3.Common
{
    public class DFS
    {
        public static void Search(Node root)
        {
            if (root == null)
            {
                return;
            }
            Visit(root);
            root.Visited = true;
            if (root.Children != null)
            {
                foreach (var node in root.Children)
                {
                    if (!node.Visited)
                    {
                        Search(node);
                    }
                }
            }
        }

        private static void Visit(Node root)
        {
            // nop
        }
    }

    public class Node
    {
        public bool Visited { get; set; }

        public Node[] Children { get; set; }
    }
}
